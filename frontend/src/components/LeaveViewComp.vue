<template>
    <table class="table">
            <thead class="tHead">
                <tr>
                    <th class="Hrow" scope="col">Employee</th>
                    <th class="Hrow" scope="col">Leave type</th>
                    <th class="Hrow" scope="col">Date Requested</th>
                    <th class="Hrow" scope="col">Reason</th>
                    <th class="Hrow" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in attendanceAndLeave" :key="employee.employeeId">
                    <td>{{ employee.name }}</td>
                    <td v-if="employee.leaveRequests && employee.leaveRequests.length">{{ employee.leaveRequests[0].reason }}</td>
                    <td v-if="employee.leaveRequests && employee.leaveRequests.length">{{ employee.leaveRequests[0].date }}</td>
                    <td v-if="employee.leaveRequests && employee.leaveRequests.length">{{ employee.leaveRequests[0].reason }}</td>
                    <td v-if="employee.leaveRequests && employee.leaveRequests.length"><div class="td-background" :style="changeBackground(employee)">
                        {{ employee.leaveRequests[0].status }}
                    </div></td>

                    <!--  handle case where there are no leave requests -->
                    <td v-else colspan="4">No leave requests</td>
                </tr>
            </tbody>
        </table>
</template>


<script>
import attendanceAndLeave from '@/data/attendanceAndLeave';

export default {
    data(){
        return{
            attendanceAndLeave
        }
    },
    methods: {
        changeBackground(employee){
    if (employee.leaveRequests[0].status) {
        if (employee.leaveRequests[0].status === 'Approved') {
            return { backgroundColor: 'green', color: 'white'};
        } else if (employee.leaveRequests[0].status === 'Denied') {
            return { backgroundColor: 'red', color: 'white' };
        } else if (employee.leaveRequests[0].status === 'Pending') {
            return { backgroundColor: 'orange', color: 'white' };
        }
    }
    return {};
    }
    }
}
</script>




<style>
.headingText {
    padding-top: 5px;
    background-color: white;
    width: 100%;
    border-radius: 3px;
    margin: 0;
    /* box-shadow: 0 4px 16px 0 rgba(8, 14, 20, 0.473); */
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
.table .Hrow{
    background-color: #2c3e50;
    color: white;
}
.table th,
td {
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #2c3e50;
    font-weight: 400;
    align-content: center;
}
.td-background{
    border-radius: 5px;
}
@media screen and (max-width: 768px) {
    .td-background{
        padding: 2px;
    }
    td{
        padding: 2px;
    }
}
</style>