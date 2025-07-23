<template>

    <div class="heading">
        <p class="headingText">CURRENT ATTENDANCE</p>
        <table class="table">
            <thead>
                <tr>
                    <th class="Hrow" scope="col">#</th>
                    <th class="Hrow" scope="col">ID</th>
                    <th class="Hrow" scope="col">Name</th>
                    <th class="Hrow" scope="col">Date</th>
                    <th class="Hrow" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(stats, idx) in attendanceAndLeave" :key="stats.employeeId">
                    <th scope="row">{{ stats.employeeId }}</th>
                    <td>{{ empIDs[idx] }}</td>
                    <td>{{ stats.name }}</td>
                    <td>{{ stats.attendance[4].date }}</td>
                    <td>
                        <div class="td-bg" :style="changeBackground(stats)">
                            {{ stats.attendance[4].status }}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.headingText {
    padding-top: 5px;
    background-color: white;
    width: 100%;
    border-radius: 10px;
    margin: 0;
}

.table {
    width: 100%;
    margin: auto;
    padding-left: 230px;
    box-shadow: 1px 4px 3px 2px rgba(8, 14, 20, 0.312);
}
.heading {
    text-align: center;
    color: #2c3e50;
    font-weight: 300;
    background-color: white;
    border-radius: 5px;
    width: 83%;
    height: 500px;
    margin-left: 15%;
    margin-top: 20px;
}
.Hrow{
    background-color: #2c3e50;
    color: white;
}
.table th,
td {
    text-align: center;
    border-bottom: 1px solid #2c3e50;
}
.td-bg{
    border-radius: 5px;
}
@media screen and (max-width: 768px) {
    .heading{
        margin-left: 12%;
        width: 86%;
    }
}
</style>

<script>
import attendanceAndLeave from '@/data/attendanceAndLeave';

export default {
    name: 'EmployeeAttendance',
    data() {
        return {
            attendanceAndLeave: attendanceAndLeave,
            empIDs: [
                 'EMP-909636',
                 'EMP-909665',
                 'EMP-909678',
                 'EMP-909623',
                 'EMP-909987',
                 'EMP-909665',
                 'EMP-909995',
                 'EMP-909623',
                 'EMP-900086',
                 'EMP-909838'
            ]
        }
    },
    methods: {
        changeBackground(stats) {
        if (stats.attendance[4].status === 'Present') {
            return { backgroundColor: 'green', color: 'white' };
        } else if (stats.attendance[4].status === 'Absent') {
            return { backgroundColor: 'red', color: 'white' };
        } else if (stats.attendance[4].status === 'N/A') {
            return { backgroundColor: 'orange', color: 'white' };
        }
        return {};
    }
    }
}

</script>
