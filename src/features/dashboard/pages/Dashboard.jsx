import { Calendar } from 'primereact/calendar'
import BarChart from '../../../components/BarChart'
import BaseDataTable from '../../../components/BaseDataTable'
import LineChart from '../../../components/LineChart'
import PieChart from '../../../components/PiChart'
import { useState } from 'react'
import moment from 'moment'

const Dashboard = () => {
	const [lineChartDateFilter, setLineChartDateFilter] = useState(null)
	const [pieChartDateFilter, setPieChartDateFilter] = useState()
	const [barChartDateFilter, setBarChartDateFilter] = useState(null)
	const [tableDateFilter, setTableDateFilter] = useState(null)

	return (
		<div className='m-0 w-full grid md:grid-cols-4 gap-3'>
			<div className='flex justify-between gap-3 w-full md:col-span-4 items-center'>
				<p className='font-bold text-lg'>{'Sample Dashboard'}</p>
			</div>
			<div className='flex flex-col max-h-[360px] w-full border rounded-lg md:col-span-2 p-3 gap-3'>
				<div className='flex flex-col md:flex-row w-full gap-3 justify-between items-center'>
					<p className='font-semibold text-lg'>
						{'Bar chart example'}
					</p>
					<Calendar
						className='w-fit'
						value={barChartDateFilter}
						readOnlyInput
						hideOnRangeSelection
						onChange={(e) => setBarChartDateFilter(e.value)}
						placeholder={'Select Range'}
						maxDate={new Date()}
						selectionMode={'range'}
						inputClassName={
							'cursor-pointer text-sm text-center p-2 font-semibold text-[#206C35] bg-[#EDF7ED] border-[#EDF7ED] hover:bg-[#EDF7ED] hover:border-[#EDF7ED]'
						}
					/>
				</div>
				<BarChart filterDateRange={barChartDateFilter} />
			</div>
			<div className='flex flex-col max-h-[360px] w-full border rounded-lg md:col-span-2 p-3 gap-3 items-center'>
				<div className='flex flex-col md:flex-row w-full gap-3 justify-between items-center'>
					<p className='w-full font-semibold text-start text-lg'>
						{'Pie chart example'}
					</p>
					<Calendar
						className='w-fit'
						value={
							pieChartDateFilter
								? moment(pieChartDateFilter).toDate()
								: ''
						}
						view='year'
						dateFormat='yy'
						readOnlyInput
						onChange={(e) =>
							setPieChartDateFilter(
								moment(e.value).format('YYYY')
							)
						}
						placeholder={'Select Year'}
						maxDate={new Date()}
						inputClassName={
							'cursor-pointer text-sm text-center p-2 font-semibold text-[#206C35] bg-[#EDF7ED] border-[#EDF7ED] hover:bg-[#EDF7ED] hover:border-[#EDF7ED]'
						}
					/>
				</div>
				<PieChart selectedYear={pieChartDateFilter} />
			</div>
			<div className='flex flex-col max-h-[360px] w-full border rounded-lg md:col-span-4 p-3 gap-3'>
				<div className='flex flex-col md:flex-row w-full gap-3 justify-between items-center'>
					<p className='font-semibold text-lg'>
						{'Line chart example'}
					</p>
					<Calendar
						className='w-fit'
						value={lineChartDateFilter}
						readOnlyInput
						hideOnRangeSelection
						onChange={(e) => setLineChartDateFilter(e.value)}
						placeholder={'Select Range'}
						maxDate={new Date()}
						selectionMode={'range'}
						inputClassName={
							'cursor-pointer text-sm text-center p-2 font-semibold text-[#206C35] bg-[#EDF7ED] border-[#EDF7ED] hover:bg-[#EDF7ED] hover:border-[#EDF7ED]'
						}
					/>
				</div>
				<LineChart filterDateRange={lineChartDateFilter} />
			</div>
			<div className='flex flex-col w-full border rounded-lg md:col-span-4 p-3 gap-3'>
				<p className='font-semibold text-lg'>{'Datatable example'}</p>
				<p className='text-xs'>
					{
						'Note: For sorting by multiple fields, hold control/command key after clicking first field name and then click on the second field name'
					}
				</p>
				<BaseDataTable filterDateRange={tableDateFilter} />
			</div>
		</div>
	)
}

export default Dashboard
