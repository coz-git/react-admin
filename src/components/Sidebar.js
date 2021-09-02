import React from 'react'

const Sidebar = () => {
    return (
        <>
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">Coding.ID</div>
                </a>
                {/* <!-- Divider --> */}
                <hr class="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Home</span></a>
                </li>
            </ul>
        </>
    )
}

export default Sidebar
