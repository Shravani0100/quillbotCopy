import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'green',
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

function createData(FREE) {
    return { FREE};
}

const rows = [
    createData('Sign Up - Its free'),
    createData('125 words in the paraphraser'),
    createData('Standard and Fluency modes'),
    createData('3 synonym options'),
    createData('1 freeze word or phrase'),
    createData('1200 words in summariser'),
    createData('X Faster processing speed'),
    createData('X Advanced grammar rewrites'),
    createData('X compare modes'),
    createData('X plagiarism checker'),
    createData('X Tone Detection'),
    createData('No credit card required'),
];

export default function FreeTables() {
    return (
        <TableContainer >
            <Table aria-label="a dense table" size="medium" style={{width:"70%",  border: "1px solid black", marginLeft: "150px", marginTop:"25px", marginBottom:"25px", borderRadius:"50%"}}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left" color='success'>FREE</StyledTableCell>
                        

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow
                            key={row.FREE}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell component="th" scope="row" align="left">
                                {row.FREE}
                            </StyledTableCell>
                           
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}