 
 <template>
    <h1 style="margin-left: 15%;">Payroll</h1>
    <hr> <br>

    <!-- INFORMATION DIVS -->
    <div class="cont-box animate__animated animate__fadeIn animate__slow">
        <div class="box one">
            <p class="text">Period: July 2025 | 31 Payable Days</p> <br>
            <table class="payroll-table">
                <tr class="costs">
                    <td class="costs"><b>R{{ PayrollCosts.toFixed(2) }}</b></td>
                    <td class="space" width="50px"></td>
                    <td class="costs"><b>R{{ EmployeeNetPay.toFixed(2) }}</b></td>
                </tr>
                <tr>
                    <td>Payroll Costs</td>
                    <td class="space" width="50px"></td>
                    <td>Employees' Net Pay</td>
                </tr>
            </table>
        </div>
        <div class="box small">
            <div class="pay-day">
                <p class="p">PAY DAY</p>
                <p class="date">31 <br> July 2025</p>
                <hr>
                <p class="p">250  employees</p>
            </div>
        </div>
        <div class="box two">
            <p class="text">Taxes & Deductions</p> <br>
            <table class="payroll-table">
                <tr>
                    <td class="costs"><b>R#</b></td>
                    <td class="space" width="50px"></td>
                    <td class="costs"><b>R{{ TotalDeduction.toFixed(2)}}</b></td>
                </tr>
                <tr>
                    <td>Taxes</td>
                    <td class="space" width="50px"></td>
                    <td>Total Deduction</td>
                </tr>
            </table>
        </div>
    </div>

    <!-- EMPLOYEE TABLE -->
    <div class="table-wrapper">
        <table class="employee-table">
            <thead>
                <tr>
                    <th>Employee Name</th> 
                    <th>ID</th>
                    <th>Hours</th>
                    <th>Gross Pay</th>
                    <th>Deduction</th>
                    <th>Net Pay</th>
                    <th>Payslip</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="info in payrollData" :key="info.employeeId">
                    <td>{{ info.name }}</td>
                    <td>{{ info.employeeId }}</td>
                    <td>{{ info.hoursWorked }}</td>
                    <td>R{{ animatedSalaries[info.employeeId]?.toFixed(2) }}</td>
                    <td>R{{ animatedDeductions[info.employeeId]?.toFixed(2) }}</td>
                    <td>R{{ animatedFinalSalaries[info.employeeId]?.toFixed(2) }}</td>
                    <td>
                        <div class="view-wrap">
                            <router-link :to="`/payslip/${info.employeeId}`" class="view">View</router-link>
                        </div>
                    </td>  
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import payrollData from '@/data/payrollData'

export default {
    name: 'Payroll',
    data() {
        // collects data from data folder
        return {
            payrollData: payrollData,
            animatedSalaries: {},
            animatedFinalSalaries: {},
            animatedDeductions: {}
        } 
    },
    computed: {
        PayrollCosts(){
            return this.payrollData.reduce((total, emp) => total + emp.salary, 0)
        },
        EmployeeNetPay(){
            return this.payrollData.reduce((total, emp) => total + emp.finalSalary, 0)
        },
        TotalDeduction(){
            return this.PayrollCosts - this.EmployeeNetPay
        }
    },
    methods: {
        deduction(emp) {
            return (emp.salary - emp.finalSalary)
        },
        animatedValue(key, target, duration = 1500) {
            const keys = key.split('.')
            
            const setValue = (val) => {
                if (keys.length === 2) {
                    this[keys[0]][keys[1]] = val
                } else {
                    this[key] = val
                }
            }

            let start = 0
            const startTime = performance.now()

            const step = (currentTime) => {
                const progress = Math.min((currentTime - startTime) / duration, 1)
                const currentValue = +(progress * target).toFixed(2)
                setValue(currentValue)

                if (progress < 1) {
                    requestAnimationFrame(step)
                }
            }

            requestAnimationFrame(step)
        }
    },
    mounted() {
        this.payrollData.forEach(emp => {
            const empId = emp.employeeId

            this.animatedSalaries[empId] = 0
            this.animatedValue(`animatedSalaries.${empId}`, emp.salary)

            this.animatedValue(`animatedFinalSalaries.${empId}`, emp.finalSalary)
            this.animatedValue(`animatedDeductions.${empId}`, this.deduction(emp))
        })
    }
}
</script>

<style>
h1 {
    text-align: left;
    font-size: 60px;
}

/* CSS INFORMATION DIVS */
.cont-box {
    width: 80%;
    margin-left: 15%;
    margin-bottom: 30px;
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    gap:30px;
    color: rgb(224, 222, 222);
}

.box {  
    background-color: #2d4257;
    width: 30%;
    padding: 8px 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.box.small {
    width: 15%;
    text-align: center;
    padding: 20px 15px;
}

.pay-day {
    text-align: center;
    font-weight: 200;
    font-size: 30px;
}

.text {
    text-align: left;
    font-size: 24px;
    font-weight: 200;
}

.payroll-table td {
    border-bottom: none;
}

.p {
    font-size: 18px;
}

.date {
    font-weight: bold;
    font-size: 20px;
}

.payroll-table {
    width: 80%;
}

.payroll-table td {
    text-align: left;
    font-size: 18px;
    font-weight: 400;
}

.payroll-table .costs {
    font-size: 26px;
}

/* CSS EMPLOYEE TABLE */
.table-wrapper {
    width: 85%;
    margin-left: 15%;
    max-width: 100vw;
    overflow-x: auto;
}

.employee-table {
    width: 100%;
    min-width: 750px;
    font-weight: 400;
}

.employee-table th {
    font-weight: bold;
    font-size: 19px;
    border-bottom: 1px solid black;
    background-color: #2d4257;
    color: white;
    padding: 10px;
}

.employee-table td {
    padding: 10px;
    color: #2d4257;
}

.employee-table th,
.employee-table td {
    text-align: left;
}

/* VIEW BUTTON */
.view {
    text-align: center;
    color: rgb(224, 222, 222);
    text-decoration: none;
}

.view-wrap {
    text-align: center;
    margin-left: 20%;
    background-color: #2d4257;
    width: 70px;
    color: rgb(224, 222, 222);
    border-radius: 40px;
    text-decoration: none;
}

.view-wrap:hover {
    cursor: pointer;
    background-color: #3e566e;
}

/* RESPONSIVENESS */
@media (max-width: 1420px) {
    .cont-box {
        flex-wrap: wrap;
    }
    .box.small {
        order: -1;
        width: 89%;
    }
    .box.one,
    .box.two {
        order: 2;
        width: 40%;
    }
}

@media (max-width: 950px) {
    .cont-box {
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .payroll-table .costs {
        font-size: 22px;
    }

    .box,
    .box.small,
    .box.one,
    .box.two {
        width: 95%;
        margin: 0 15px;
    }
}
</style>