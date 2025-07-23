<template>
    <router-link to="/payroll">
        <div class="return-btn">
            <router-link to="/payroll">
                <i class="i-arrow fa fa-arrow-left fa-lg" aria-hidden="true"></i>
            </router-link>
        </div>
    </router-link>
    <!-- HEADING -->
    <div class="page">
        <div class="heading-top">
            <h1>ModernTech Solutions</h1> <br>
            <h3 class="payslip">PAYSLIP</h3>
            <p style="font-weight: 400; font-size: 20px;">Pay Date: 31 July 2025</p> <br> <br>
        </div>

        <div v-if="employee">
            <!-- EMPLOYEE INFORMATION -->
            <div class="emp-info">
                <p>Employee name: {{ employee.name }}</p>
                <p>ID Number: </p>
                <p>Bank Details: </p>
                <p>Tax Number: </p>
            </div>
            <br>

            <!-- TABLE -->
            <div class="tables">
                <div class="table-wrap">
                    <table class="earnings-deductions-table">
                        <!-- EARNINGS TABLE -->
                        <thead>
                            <tr>
                                <th>Earnings</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Basic</td>
                                <td>R{{ employee.salary.toFixed(2) }}</td>
                            </tr>
                            <tr>
                                <td>Bonus</td>
                                <td>N/A</td>
                            </tr>
                            <tr style="height: 30px;">
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                        <!-- DEDUCTIONS TABLE -->
                        <thead>
                            <tr>
                                <th>Deductions</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Deductions</td>
                                <td>R{{ deduction.toFixed(2) }}</td>
                            </tr>
                            <tr>
                                <td>Taxes</td>
                                <td>R#</td>
                            </tr>
                            <tr style="height: 30px;">
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                        <!-- TOTALS -->
                        <thead class="totals-head">
                            <tr>
                                <th>Total Deductions</th>
                                <th>R{{ deduction.toFixed(2) }}</th>
                            </tr>
                            <tr>
                                <th>Salary</th>
                                <th>R{{ employee.finalSalary.toFixed(2) }}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div>
                    <p class="estimated"><i>Estimated annual salary: R{{ estimatedAnnual.toFixed(2) }}</i></p>
                </div>
            </div>
        </div> <br> <br> <br>
    

        <!-- SIGNATURES -->
        <div class="signatures">
            <p>Approved by:_________________________</p>
            <p>Recieved by:_________________________</p>
        </div>
    </div>
</template>

<script>
import payrollData from '@/data/payrollData';

export default {
    data() {
        return {
            payrollData,
            employee: null
        }
    },
    created() {
        // runs automatically on component creation
        const employeeId = parseInt(this.$route.params.id)
        this.employee = this.payrollData.find(emp => emp.employeeId === employeeId)
    },
    computed: {
        deduction() {
            if (this.employee) {
                return this.employee.salary - this.employee.finalSalary
            }
        },
        estimatedAnnual() {
            if (this.employee) {
                return this.employee.finalSalary * 12
            }
        }
    }
}
</script>

<style>
body {
    margin: 0;
}

.page {
    max-width: 100%;
    padding: 20px;
}

.payslip {
    color: #2d4257;
}

/* BACK BUTTON */
.return-btn {
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    height: 55px;
    width: 55px;
    text-align: center;
    align-content: center;
    border: 2px solid #2d4257;
    position: fixed;
    top: 30px;
    left: 30px;
}

.return-btn:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.908);
    height: 57px;
    width: 57px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.heading-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    max-width: 100%;
    background-color: transparent;
}

/* CSS EMPLOYEE INFORMATION */
.emp-info {
    text-align: left;
    font-size: 25px;
    color: #2d4257;
    margin-left: 6%;
    font-weight: 400;
}

/* CSS TABLES */
.table-wrap {
    width: 100%;
    overflow-x: auto;
}
.earnings-deductions-table {
    margin: 0 auto;
    font-size: 20px;
    width: 94%;

}

.earnings-deductions-table td {
    border-bottom: none;
    font-weight: 300;
    text-align: left;
    color: #2d4257;
}

.earnings-deductions-table th {
    background-color: #2d4257;
    color: white;
    border-bottom: 1px solid black;
}

.totals-head th {
    border-bottom: none;
}

.estimated {
    text-align: right;
    font-weight: 400;
    font-size: 20px;
    color: #2d4257;
    margin-right: 4%;
}

/* Signatures */
.signatures {
    display: flex;
    justify-content: space-evenly;
    color: #2d4257;
    gap: 100px;
    flex-wrap: wrap;
}

.signatures p {
    font-weight: 400;
    font-size: 22px;
}
</style>