import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'orange',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   

    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(PREMIUM) {
    return { PREMIUM};
}

const rows = [
    createData( 'Upgrade to Premium'),
    createData( 'Unlimited words in the paraphraser'),
    createData( 'Standard, Fluency, Formal, Simple, Creative, Expand, and Shorten'),
    createData( '4 synonym options'),
    createData( 'Unlimited freeze word or phrase'),
    createData( '6000 words in summariser'),
    createData( '(tick) Faster processing speed'),
    createData( '(tick) Advanced grammar rewrites'),
    createData( '(tick) compare modes'),
    createData( '(tick) plagiarism checker'),
    createData( '(tick) Tone Detection'),
    createData( '3 days money back guarantee'),
];

export default function PremiumTables() {
    return (
        <TableContainer>
            <Table aria-label="a dense table" size="medium" borderRadius="50%" style={{width:"70%",  border: "1px solid black", borderRadius: "50%", marginLeft: "50px", marginTop:"25px", marginBottom:"25px"}}>
                <TableHead>
                    <TableRow>
                        {/* <StyledTableCell align="center" color='success'>FREE</StyledTableCell> */}
                        <StyledTableCell align="left">PREMIUM</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow
                            key={row.PREMIUM}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell component="th" scope="row" align="left">
                                {row.PREMIUM}
                            </StyledTableCell>
                           
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}