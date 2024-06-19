import { useState, useEffect } from 'react'
import { FilterMatchMode } from 'primereact/api'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { tableData } from '../../dummyData.json'
import moment from 'moment'

const BaseDataTable = () => {
	const [customers, setCustomers] = useState(null)
	const [filters, setFilters] = useState({
		global: { value: null, matchMode: FilterMatchMode.CONTAINS },
	})
	const [loading, setLoading] = useState(true)
	const [globalFilterValue, setGlobalFilterValue] = useState('')

	useEffect(() => {
		setCustomers(tableData)
		setLoading(false)
	}, [])

	const onGlobalFilterChange = (e) => {
		const value = e.target.value
		let _filters = { ...filters }

		_filters['global'].value = value

		setFilters(_filters)
		setGlobalFilterValue(value)
	}

	const renderHeader = () => {
		return (
			<div className='flex justify-content-end'>
				<IconField iconPosition='left'>
					<InputIcon className='pi pi-search' />
					<InputText
						value={globalFilterValue}
						onChange={onGlobalFilterChange}
						placeholder='Search...'
					/>
				</IconField>
			</div>
		)
	}

	const header = renderHeader()

	return (
		<DataTable
			value={customers}
			paginator
			rows={10}
			dataKey='id'
			loading={loading}
			filters={filters}
			globalFilterFields={[
				'product_name',
				'category',
				'sub_category',
				'quantity_sold',
				'unit_price',
			]}
			header={header}
			emptyMessage='No customers found.'
			removableSort
			sortMode='multiple'
		>
			<Column
				field='product_name'
				header='Product Name'
				sortable
			/>
			<Column
				field='category'
				header='Category'
				sortable
			/>
			<Column
				field='sub_category'
				header='Sub category'
				sortable
			/>
			<Column
				field='date'
				header='Sale Date'
				body={(rowData) =>
					moment(rowData.date, 'YYYY-MM-DD').format('DD/MM/YYYY')
				}
				sortable
			/>
			<Column
				field='quantity_sold'
				header='Sold Quantity'
				sortable
			/>
			<Column
				field='unit_price'
				header='Price'
				sortable
			/>
			<Column
				field='revenue'
				header='Revenue'
				body={(rowData) =>
					(rowData.unit_price * rowData.quantity_sold).toFixed(2)
				}
			/>
		</DataTable>
	)
}

export default BaseDataTable
