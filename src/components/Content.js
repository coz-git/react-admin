import React from 'react'

let data = [
    {
        nama: 'kosasih',
        phone: '08571889000',
        email: 'sultankosasih@gmail.com'
    },
    {
        nama: 'wahid',
        phone: '08571889000',
        email: 'sultankosasih@gmail.com'
    },
    {
        nama: 'pramana',
        phone: '08571889000',
        email: 'sultankosasih@gmail.com'
    },
    {
        nama: 'Robert G Dangelo',
        phone: '347-972-7058',
        email: 'candido.hans@hotmail.com'
    },
    {
        nama: 'Pamela G Dowdy',
        phone: '203-832-9533',
        email: 'jaydon.kuph@gmail.com'
    },
]

const Content = () => {
    return (
        <>
            <div class="container-fluid">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <h3>Data Karyawan</h3>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-plus-square" style={{ marginRight: '5px' }}></i> Add</button>
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
                        {data.map((item, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.nama}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button type="button" style={{ margin: '0px 5px' }} class="btn btn-secondary"><i class="fas fa-edit"></i></button>
                                    <button type="button" style={{ margin: '0px 5px' }} class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Tambah Karyawan</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Name</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Phone</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Phone" />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Email</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
