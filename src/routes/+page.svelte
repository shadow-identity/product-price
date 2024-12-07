<script lang="ts">
	import { assets } from '$app/paths';
	import { get, set } from 'idb-keyval';
	const IDB_KEY = 'products';
	const makeNewProduct = () => ({ category: '', name: '', price: 0 });
	type ProductEntry = { category: string; name: string; price: number };
	let products: ProductEntry[] = $state([]);
	get(IDB_KEY).then((result = []) => {
		products = result;
	});
	let newProduct = $state(makeNewProduct());
	const submit = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			products.push(newProduct);
			newProduct = makeNewProduct();
			set(IDB_KEY, $state.snapshot(products))
				.then(() => console.log('worked'))
				.catch(() => console.log('failed'));
		}
	};
	const filteredProducts = $derived.by(() => {
		if (newProduct.category)
			return products.filter(({ category }) => category.startsWith(newProduct.category));
		return products;
	});
	const remove = (product: ProductEntry) => {
		const index = products.indexOf(product);
		products.splice(index, 1);
		set(IDB_KEY, $state.snapshot(products));
	};

	const share = async () => {
		const dateString = new Date().toLocaleString();
		const title = `Продукты, ${dateString}`;
		const productsJson = JSON.stringify($state.snapshot(products), null, '  ');
		const files = [new File([productsJson], `${title}.json`, { type: 'text/plain' })];
		if (navigator.canShare({ files })) {
			await navigator.share({
				title,
				files
			});
		}
	};
</script>

<table>
	<thead>
		<tr>
			<th>Категория</th>
			<th>Продукт</th>
			<th>Цена</th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		<tr onkeypress={submit}>
			<td>
				<input type="text" bind:value={newProduct.category} />
			</td>
			<td><input type="text" bind:value={newProduct.name} /></td>
			<td><input type="number" bind:value={newProduct.price} /></td>
			<td>
				<button type="button" onclick={share}
					><img src={`${assets}/share.svg`} alt="Share" />
				</button>
			</td>
		</tr>

		{#each filteredProducts as product}
			<tr>
				<td>{product.category}</td>
				<td>{product.name}</td>
				<td>{product.price}</td>
				<td>
					<button onclick={() => remove(product)} type="button" aria-label="Удалить">🗑</button>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
	}
	thead th:nth-child(1) {
		width: 30%;
	}

	thead th:nth-child(2) {
		width: 50%;
	}

	thead th:nth-child(3) {
		min-width: 3rem;
		width: 10%;
	}
	thead th:nth-child(4),
	tbody td:nth-child(4) {
		max-width: 1rem;
	}

	tbody td:nth-child(3) {
		text-align: right;
	}
	input {
		width: 100%;
	}

	th,
	td {
		padding: 3px 10px;
	}
	button {
		width: 2rem;
	}
	img {
		width: 1rem;
		aspect-ratio: 1;
	}
</style>
