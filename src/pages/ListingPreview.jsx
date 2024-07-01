import React from 'react'

import Header from '../shared/Header';
// import Footer from '../shared/Footer';
import listingInnerImg from '../assets/img/innerBanner.jpg';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Container, Typography, FormLabel } from '@mui/material';
import Footer from '../shared/Footer';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const columns = [
    { id: 'sno', label: 'S.No' },
    { id: 'propertytitle', label: 'Property Title' },
    { id: 'propertytype', label: 'Property Type' },

    {
        id: 'yearbuilt',
        label: 'Property Built',
    },
    {
        id: 'floors',
        label: 'Floors',
        format: (value) => value.toLocaleString('en-US'),
    },

    {
        id: 'propertystatus',
        label: 'Property Status',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'parking',
        label: 'Parking',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'pricingplan',
        label: 'Pricing Plan',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'city',
        label: 'City',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'postalcode',
        label: 'Postal Code',
    },
    {
        id: 'price',
        label: 'Price',
    },
    // {
    //     id: 'density',
    //     label: 'Density',
    //     format: (value) => value.toFixed(2),
    // },
];

function createData(sno, propertytitle, propertytype, yearbuilt, floors, propertystatus, parking, pricingplan, city, postalcode, price) {
    // const density = yearbuilt / floors;
    return { sno, propertytitle, propertytype, yearbuilt, floors, propertystatus, parking, pricingplan, city, postalcode, price };
}

const rows = [
    createData('1', 'Lorem Ipsum', 'Coliving', 2024, 15, 'For Rent', 'Available', 'Single Sharing', 'Gurugram', 112233, 35000),
    createData('2', 'Lorem Ipsum', 'Virtual Office', 2024, 15, 'For Sale', 'Unavailable', 'Double Sharing', 'Gurugram', 112233, 35000),
    createData('3', 'Lorem Ipsum', 'Coliving', 2024, 15, 'For Rent', 'Available', 'Single Sharing', 'Gurugram', 112233, 35000),
    createData('4', 'Lorem Ipsum', 'Virtual Office', 2024, 15, 'For Sale', 'Unavailable', 'Double Sharing', 'Gurugram', 112233, 35000),
    createData('5', 'Lorem Ipsum', 'Coliving', 2024, 15, 'For Rent', 'Available', 'Single Sharing', 'Gurugram', 112233, 35000),
    createData('6', 'Lorem Ipsum', 'Virtual Office', 2024, 15, 'For Sale', 'Unavailable', 'Double Sharing', 'Gurugram', 112233, 35000),
    createData('7', 'Lorem Ipsum', 'Coliving', 2024, 15, 'For Rent', 'Available', 'Single Sharing', 'Gurugram', 112233, 35000),
    createData('8', 'Lorem Ipsum', 'Virtual Office', 2024, 15, 'For Sale', 'Unavailable', 'Double Sharing', 'Gurugram', 112233, 35000),
    createData('9', 'Lorem Ipsum', 'Coliving', 2024, 15, 'For Rent', 'Available', 'Single Sharing', 'Gurugram', 112233, 35000),
    createData('10', 'Lorem Ipsum', 'Virtual Office', 2024, 15, 'For Sale', 'Unavailable', 'Double Sharing', 'Gurugram', 112233, 35000),
    createData('11', 'Lorem Ipsum', 'Coliving', 2024, 15, 'For Rent', 'Available', 'Single Sharing', 'Gurugram', 112233, 35000),
    createData('12', 'Lorem Ipsum', 'Virtual Office', 2024, 15, 'For Sale', 'Unavailable', 'Double Sharing', 'Gurugram', 112233, 35000),
];

const ListingPreview = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Header />

            <Box className="innerBannerSec">
                <img src={listingInnerImg} />
                <Typography variant='h2'>Listing Preview</Typography>
            </Box>

            <Container className='cstmContainer my-5'>
                <Box className='tableSearchFilter'>
                    <FormControl className='cstmFormControl' sx={{ width: '100%', display:'flex' }}>
                        <FormLabel>Search:</FormLabel>
                        <OutlinedInput
                            className="cstmInputField"
                        />
                    </FormControl>
                </Box>

                <Box className="cstmDataTable_WraperSec">
                    <TableContainer>
                        <Table stickyHeader aria-label="sticky table" className='cstmTable'>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell className='cstmTh'
                                            key={column.id}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                    <TableCell className='cstmTh'>
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} className='cstmTd'>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}

                                                <TableCell className='cstmTd'>
                                                    <Button className='tableActionBTN cstmEditBTN'>
                                                        <EditIcon />
                                                    </Button>

                                                    <Button className='tableActionBTN cstmDeleteBTN'>
                                                        <DeleteIcon />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TablePagination
                        className='cstmTablePagination'
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
            </Container>

            <Footer />
        </>
    )
}

export default ListingPreview