import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Content = () => {
    const [dataKaryawan, setDataKaryawan] = useState([])
    const [action, setAction] = useState('add')
    const [form, setForm] = useState({
        'id_karyawan': '',
        'nama_karyawan': '',
        'phone_karyawan': '',
        'email_karyawan': '',
    })


    useEffect(() => {
        getData()
    }, [])

    let getData = () => {
        Axios.get('http://localhost:5000/get_karyawan')
            .then(function (response) {
                // handle success
                setDataKaryawan(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    let submitHandler = () => {
        if (action == 'add') {
            Axios.post('http://localhost:5000/add_karyawan', form)
                .then(function (response) {
                    getData()
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else if (action == 'update') {
            Axios.post('http://localhost:5000/update_karyawan', form)
                .then(function (response) {
                    getData()
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    let deleteHandler = (id) => {
        Axios.post('http://localhost:5000/delete_karyawan/' + id)
            .then(function (response) {
                getData()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    let updateHandler = (item) => {
        setAction('update')
        setForm(item)
        // console.log(item)
    }

    console.log(form)

    return (
        <>
            <div class="container-fluid">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <h3>Data Karyawan</h3>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".modalAction"><i class="fas fa-plus-square" style={{ marginRight: '5px' }}></i> Add</button>
                </div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataKaryawan.map((item, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.nama_karyawan}</td>
                                <td>{item.phone_karyawan}</td>
                                <td>{item.email_karyawan}</td>
                                <td>
                                    <button
                                        type="button"
                                        style={{ margin: '0px 5px' }}
                                        class="btn btn-secondary"
                                        data-toggle="modal"
                                        data-target=".modalAction"
                                        onClick={() => updateHandler(item)}
                                    >
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button
                                        type="button"
                                        style={{ margin: '0px 5px' }}
                                        class="btn btn-danger"
                                        onClick={() => deleteHandler(item.id_karyawan)}
                                    >
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* <!-- Modal --> */}
            <div class="modal fade modalAction" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">{action}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="formGroupExampleInput"
                                        placeholder="Name"
                                        onChange={(e) => setForm({ ...form, nama_karyawan: e.target.value })}
                                        value={form.nama_karyawan}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Phone</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="formGroupExampleInput2"
                                        placeholder="Phone"
                                        onChange={(e) => setForm({ ...form, phone_karyawan: e.target.value })}
                                        value={form.phone_karyawan}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Email</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="formGroupExampleInput2"
                                        placeholder="Email"
                                        onChange={(e) => setForm({ ...form, email_karyawan: e.target.value })}
                                        value={form.email_karyawan}
                                    />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={() => submitHandler()} class="btn btn-primary" data-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
