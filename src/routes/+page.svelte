<script lang="ts">
	import { assets } from '$app/paths';
	import { get, set } from 'idb-keyval';

	const IDB_KEY = 'products';
	const makeNewProduct = () => ({ category: '', name: '', priceTotal: 0, priceUnit: 0, amount: 1 });
	type ProductEntry = {
		category: string;
		name: string;
		priceTotal: number;
		priceUnit: number;
		amount: number;
	};
	let products: ProductEntry[] = $state([]);
	get(IDB_KEY).then((result = []) => {
		products = result;
	});
	let newProduct = $state(makeNewProduct());

	const submit = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			products.unshift(newProduct);
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

	const edit = (product: ProductEntry) => {
		const index = products.indexOf(product);
		products.splice(index, 1);
		newProduct = product;
	};
</script>

<table>
	<thead>
		<tr>
			<th>Категория</th>
			<th>Продукт</th>
			<th>Стоим.</th>
			<th>Кол-во</th>
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
			<td><input type="number" bind:value={newProduct.priceTotal} /></td>
			<td><input type="number" bind:value={newProduct.amount} /></td>
			<td><input type="number" bind:value={newProduct.priceUnit} /></td>
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
				<td>{product.priceTotal}</td>
				<td>{product.amount}</td>
				<td>{product.priceUnit}</td>
				<td>
					<div>
						<button onclick={() => remove(product)} type="button" aria-label="Удалить">🗑</button>
						<button onclick={() => edit(product)} type="button" aria-label="Редактировать"
							>🖋️</button
						>
					</div>
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
	thead th:last-child(4),
	tbody td:last-child(4) {
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

	td > div {
		display: flex;
		gap: 0.7rem;
	}
	button {
		width: 2rem;
	}
	img {
		width: 1rem;
		aspect-ratio: 1;
	}
</style>
