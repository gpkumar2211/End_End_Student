"use client"
import { Api } from '@/common/Api';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Cookies } from '@/common/cookies';
import { useRouter } from 'next/navigation';
const Users = () => {
    const [users, setUsers] = useState([])
    const router = useRouter();
    const headers = ["Name", "User ID", "Address"]
    const columns = ["name", "uid", "address"]
    const dispatch = useDispatch();

    if (!Cookies.hasActiveSession()) {
        router.push('/')
    }

    useEffect(() => {
        fnGetUsers();
    }, [])

    const fnGetUsers = async () => {
        try {
            dispatch({ type: "LOADER", payload: true })
            const res = await Api.fnSendGetReq('std/get-std')
            setUsers(res?.data || [])
        } catch (ex) {
            console.error("users", ex);
            setUsers([])
        } finally {
            dispatch({ type: "LOADER", payload: false })
        }
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                headers?.map((val, ind) => {
                                    return <TableCell key={`th${indexedDB}`} >{val}</TableCell>
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {
                                    columns?.map((val, ind) => {
                                        return <TableCell key={`td_${ind}`} component="th" scope="row">
                                            {row[val]}
                                        </TableCell>
                                    })
                                }


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Users
