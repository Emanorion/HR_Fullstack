<template>
    <div class="empTable">
        <table class="content">
            <thead>
                <th class="Hrow" scope="col">#</th>
                <th class="Hrow" scope="col">ID</th>
                <th class="Hrow" scope="col">Name</th>
                <th class="Hrow" scope="col">
                    <div class="btn-group">
                        <span class="date">Date</span><button type="button" class="btn "></button>
                        <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item"><input v-model="selectDate" type="date"></a></li>
                        </ul>
                    </div>
                </th>
                <th class="Hrow" scope="col">Status</th>
            </thead>
            <tbody>
                <tr v-for="(stats, idx) in attendanceAndLeave" :key="stats.employeeId">
                    <th scope="row">{{ stats.employeeId }}</th>
                    <td>{{ empIDs[idx] }}</td>
                    <td>{{ stats.name }}</td>
                    <td>{{ stats.attendance[4].date }}</td>
                    <td class="last-one">
                        <div class="td-back" :style="changeBackground(stats)">
                            {{ checkIfDatePresent(stats) }}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import attendanceAndLeave from '@/data/attendanceAndLeave';

export default {
    name: 'EmployeeOverallAttendance',
    data() {
        return {
            attendanceAndLeave: attendanceAndLeave,
            selectDate: '',
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

        checkIfDatePresent(stats) {
            const record = stats.attendance.find(att => att.date === this.selectDate);
            return record ? record.status : 'N/A'
        },
        changeBackground(stats) {
            const record = stats.attendance.find(att => att.date === this.selectDate);
            if (record) {
                if (record.status === 'Present') {
                    return { backgroundColor: 'green', color: 'white' };
                } else if (record.status === 'Absent') {
                    return { backgroundColor: 'red', color: 'white' };
                }
            } else {
                // No record found, so status is N/A
                return { backgroundColor: 'grey', color: 'white' };
            }
            return {};
        }
     }
}
</script>

<style>
.empTable {
    text-align: center;
    color: #2c3e50;
    font-weight: 300;
    background-color: white;
    border-radius: 5px;
    width: 80%;
    height: 90vh;
    margin-left: 15%;
    margin-top: 20px;
}

.Hrow {
    background-color: #2c3e50;
    color: white;
}

.content {
    width: 100%;
    margin: auto;
    padding: 10;
    box-shadow: 1px 4px 3px 2px rgba(8, 14, 20, 0.312);
    height: 100%;
}

.date {
    text-align: center;
    margin-top: 7px;
    font-size: 16px;
}

.content th,
td {
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #2c3e50;
    height: 45px;
}

.btn-group .btn-danger {
    background-color: #007bff !important;
    border-color: #007bff !important;
    color: #fff !important;
    margin-top: 4px;
}

.td-back {
    border-radius: 5px;
}
</style>