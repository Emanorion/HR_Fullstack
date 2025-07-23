<template>
    <div class="attendanceCard">
        <h4 class="attendTitle">Attendance feedback</h4>
        <div class="subDiv">
            <p class="sub-txt">Todays stats</p>
            <img class="sub-img" src="data:image/png;base64,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" alt="target">
        </div>
        <div class="mini-attendCards">
            <div class="mini-stats">
                <div class="a-l-a">Present {{ totalAttendance() }}</div>
                <div class="a-l-a">Late 2</div>
                <div class="a-l-a">Absent {{ isPresent() }}</div>
            </div>
            <div class="tank">
                <div class="attendanceProgress">
                    <div class="progressBar" :style="{ width: progressWidth + '%' }">Attendance {{ progressWidth }}%
                    </div>
                </div>
            </div>
            <div class="see-wrap">
                <router-link to="/overallattendance"><button class="seeattend">see more</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import attendanceAndLeave from '@/data/attendanceAndLeave';

export default {

    name: 'AttendanceStats',
    data() {
        return {
            progressWidth: 20,
            attendanceAndLeave: attendanceAndLeave
        }
    },
    mounted() {
        this.move();
    },
    methods: {
        move() {
            if (this.progressWidth >= 100) {
                this.progressWidth = 1;
            }
            let width = this.progressWidth;
            let id = setInterval(() => {
                if (width >= 100) {
                    clearInterval(id);
                } else {
                    width++;
                    this.progressWidth = width;
                }
            }, 10);
        },
        totalAttendance() {
            let count = 0;
            this.attendanceAndLeave.forEach(employee => {
                if (
                    employee.attendance &&
                    Array.isArray(employee.attendance) &&
                    employee.attendance[4] && // 5th record exists
                    employee.attendance[4].status === "Present"
                ) {
                    count++;
                }
            });
            return count;
        },
        isPresent(){
            let total = 0;
            this.attendanceAndLeave.forEach(employee => {
                if(
                    employee.attendance &&
                    Array.isArray(employee.attendance) && 
                    employee.attendance[4] &&
                    employee.attendance[4].status === "Absent"
                ){
                    total ++;
                }
            });
            return total
        }
    },
}
</script>
<style>
.attendTitle{
    margin: 5px;
    font-size: 30px;
    color: rgba(126, 123, 123, 0.904);
}
.subDiv{
    display: flex;
    justify-content: space-between;
    width: 80%;
}
.sub-img{
    width: 100px;
}
.sub-txt{
    font-size: 30px;
    font-weight: 400;
    padding-left: 20px;
    padding-top: 20px;
}
.attendanceCard {
    margin-left: 10px;
    width: 100%;
    background-color: white;
    height: 350px;
    border-radius: 10px;
    box-shadow: 0 4px 16px 0 rgba(8, 14, 20, 0.312);
}

.mini-stats {
    display: flex;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    width: 90%;
    height: 70px;
}
.a-l-a{
    color: #2c3e50;
    font-size: 25px;
    font-weight: 400;
}
.mini-attendCards{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.tank {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
}

.attendanceProgress {
    width: 90%;
    background-color: grey;
    border-radius: 4px;
}

.seeattend {
    width: 100%;
    height: 30px;
    background-color: white;
    border: 1px solid skyblue;
    border-radius: 5px;
    color: rgb(78, 177, 216);
    margin-top: 30px;
}
.see-wrap{
    margin: auto;
    width: 90%;
}
.progressBar {
    height: 40px;
    width: 1%;
    background-color: #2c3e50;
    color: white;
    text-align: center;
    align-content: center;
    font-weight: 300;
    margin: auto;
    border-radius: 4px;
}
@media screen and (max-width: 1024px) {
    .attendTitle{
        font-size: 25px;
    }
    .subDiv{
        width: 95%;
        display: flex;
        align-items: center;
    }
    .sub-txt{
        font-size: 20px;
        padding: 10px 0 0 10px;
    }
    .sub-img{
        width: 60px;
    }
    .a-l-a{
        font-size: 18px;
    }
}
@media screen and (max-width: 768px) {
    .subDiv{
        width: 95%;
    }
    .a-l-a{
        text-align: center;
    }
    .attendanceCard{
        width: 50%;
    }
}
@media screen and (max-width: 480px) {
    .attendanceCard{
        width: 100%;
        margin: 10px 0 0 0;
    }
}
</style>