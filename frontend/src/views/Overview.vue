<template>
    <div class="overView-Layout">
        <div class="stats">
            <div class="sub-layout">
                <div class="dash-title">
                    <WelcomeComp />
                </div>
                <div class="cont">
                    <LeaveStats />
                    <AttendanceStats />
                </div>
            </div>
            <div class="rev-card-item">
                <EmployeeReview />
            </div>
        </div>
        <div class="bottom-half">
            <EmployeeAttendance />
        </div>
        <div class="dashboardLayout">
            <Dashboard />
        </div>
    </div>
</template>
<script>
import Dashboard from '@/components/SideBar.vue';
import EmployeeAttendance from '@/components/EmployeeAttendance.vue';
import LeaveStats from '@/components/LeaveStats.vue';
import AttendanceStats from '@/components/AttendanceStats.vue';
import EmployeeReview from '@/components/EmployeeReview.vue';
import WelcomeComp from '@/components/WelcomeComp.vue';

export default {
    components: {
        Dashboard,
        EmployeeAttendance,
        LeaveStats,
        AttendanceStats,
        EmployeeReview,
        WelcomeComp
    }
}

</script>
<style>
.dash-title {
    margin-top: 30px;
    margin-bottom: 13px;
}

.overView-Layout {
    display: flex;
    flex-direction: column;
}

.stats {
    display: flex;
    width: 80%;
    margin-left: 15%;
    padding-top: 10px;
}

.sub-layout {
    display: flex;
    flex-direction: column;
    width: 70%;
}

.cont {
    display: flex;
    width: 100%;
}
@media screen and (max-width: 1024) {
    
}
@media screen and (max-width: 768px){
    .stats{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin-left: 10%;
        padding: 0;
    }
    .sub-layout{
        width: 97%;
    }
    .cont{
        width: 100%;
        margin-bottom: 20px;
        display: flex;

    }
    .rev-card-item{
        width: 97%;
        height: 500px;
    }
}
@media screen and (max-width: 480px){
    .cont{
        display: flex;
        flex-direction: column;
        margin-left: 20px;
    }
}
</style>