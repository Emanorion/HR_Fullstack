<template>
    <div class="sideBar">
        <div class="sidebar-title">
            <p>Dashboard</p>
        </div>
        <div class="items">
            <ul>
                    <li class="icon sidebar-item":class="{ active: $route.path === '/payroll' }"><router-link to="/payroll"><i class="fa fa-credit-card"></i></router-link><router-link to="/payroll"class="dash-link">Payroll</router-link></li>
                    <li class="icon sidebar-item":class="{ active: $route.path === '/Employees' }"><router-link to="/Employees"><i class="fa fa-user" aria-hidden="true"></i></router-link><router-link to="/Employees"
                        class="dash-link">Employees</router-link></li>
                    <li class="icon sidebar-item":class="{ active: $route.path === '/overview' }"><router-link to="/overview"><i class="fa fa-bar-chart" aria-hidden="true"></i></router-link><router-link to="/overview"
                        class="dash-link">Overview</router-link></li>
                    <li class="icon sidebar-item":class="{ active: $route.path === '/overallattendance' }"><router-link to="/overallattendance"><i class="fa fa-tasks" aria-hidden="true"></i></router-link><router-link
                        to="/overallattendance" class="dash-link">Attendance</router-link></li>
                    <li class="icon sidebar-item":class="{ active: $route.path === '/leaveform' }"><router-link to="/leaveform"><i class="fa fa-calendar-o" aria-hidden="true"></i></router-link><router-link to="/leaveform"
                        class="dash-link">Leave Requests</router-link></li>
                    <li class="icon sidebar-item":class="{ active: $route.path === '/reviews' }"><router-link to="/reviews"><i class="fa fa-star" aria-hidden="true"></i></router-link><router-link to="/reviews"
                        class="dash-link">Reviews</router-link></li>
                    <li class="icon sidebar-item"><router-link to="/"><i class="fa fa-hand-o-left" aria-hidden="true"></i></router-link><router-link to="/"
                        class="dash-link">Log Out</router-link></li>
                    
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Dashboard'
}
</script>
<style>
.fa {
    color: white;
}

.sidebar-title {
    font-size: 25px;
    color: skyblue;
    font-weight: 500;
    width: 100%;
    padding-left: 15px;
}

.items ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
}
.items-box{
    display: flex;
}
.dash-link {
    color: white;
    text-decoration: none;
}

.items {
    color: white;
    font-size: 20px;
    text-align: start;
    width: 100%;
}
.sidebar-item.active {
    background-color: #2c3e50;
}
.dashItems {
    background-color: rgba(128, 128, 128, 0.497);

}

.sideBar {
    background-color: #333;
    width: 14%;
    height: 100%;
    z-index: 1000;
    position: fixed;
    overflow-y: auto;
    top: 0;
    left: 0;
}
@media screen and (max-width: 768px) {
    .sideBar {
    width: 60px;
    min-width: 30px;
    max-width: 60px;
    height: 100%;
    position: fixed;
    padding: 0;
  }
  .dash-link {
    display: none;
  }
  .sidebar-title {
    display: none;
  }
  .sidebar-item {
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap:0;
    width: 100%;
  }
  .fa {
    font-size: 20px; /* Make icons smaller if needed */
  }
}
@media screen and (max-width: 1024px) {
    .sideBar{
    width: 14%;
    height: 100%;
    position: fixed;
    }
    .items{
        font-size: 15px;
    }
    .sidebar-title{
        font-size: 20px;
    }
}
.sidebar-item{
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding: 18px ;
}
</style>