import React, { useCallback } from 'react'
import { DataTypeProvider } from '@devexpress/dx-react-grid'
import { Grid, Table, TableHeaderRow, TableBandHeader } from '@devexpress/dx-react-grid-material-ui'
import { rows } from './data'
import './styles.css'

const getRowId = (row) => row.id

const columns = [
    {name: 'name', title: 'наименование'},
    {name: 'piceWhitVat', title: 'цена с ндс'},
    {name: 'priceWhitoutVat', title: 'цена без ндс'},
    {name: 'VAT', title: 'НДС'},
    {name: 'quantity', title: 'заказано'},
    {name: 'finalQuantity', title: 'принято'},

]

const columnBands = [
    { columnName: 'goods', title: 'Товар', children: [
        {
            columnName: 'name'
        },
    ] },
    { columnName: 'price', title: 'Цена', children: [
            {
                columnName: 'piceWhitVat'
            },
            {
                columnName: 'priceWhitoutVat'
            },
            {
                columnName: 'VAT'
            }
        ]  
    },
    {
        columnName: 'count', title: 'количество', children: [
            { columnName: 'quantity' },
            { columnName: 'finalQuantity' },
        ]
    }
]

export const Lesson1 = () => {

    const rowComponent = useCallback((props)=>{
        const { row: {
            quantity, finalQuantity
        } } = props
        const className = quantity !== finalQuantity ? 'discrepancies' : ''
        return <Table.Row {...props} className={className}/>
    }, [])

    return <Grid columns={columns} rows={rows} getRowId={getRowId}>
        <Table
            columnExtensions={[
                { columnName: 'name', wordWrapEnabled: true, width: '300px' }
            ]}
            rowComponent={rowComponent}
        />
        <TableHeaderRow/>
        <TableBandHeader columnBands={columnBands}/>
        <PriceProvider for={['name']}/>
    </Grid>
}


const PriceProvider = (props) => {
    return <DataTypeProvider formatterComponent={(props)=>{
    console.log({ props })
        const { value, row: {
            unit
        } } = props
        return <div className='price'>
            <div>{value}</div>
            <div><span className={'unit'}>ед. изм.</span>{unit}</div>
        </div>
    }} {...props}/>
}