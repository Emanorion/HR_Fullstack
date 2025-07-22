<template>
    <div class="card2">
        <div class="cardtop">
            <div>
                <h3>Leave Requests</h3>
                <p class="date">Date: {{ attendanceAndLeave[0].leaveRequests[1]?.date || 'N/A' }}</p>
            </div>
            <router-link to="/leaveform">
                <button>See all</button>
            </router-link>
        </div>
        <div class="leaveCard" v-for="attendance in attendanceAndLeave.slice(0, 4)" :key="attendance.employeeId">
            <div class="Laeveimg">
                <img src="https://icon2.cleanpng.com/20180425/qtq/avtpmxje6.webp" alt="pfp">
            </div>
            <div class="leaveRow">
                <h5>{{ attendance.name }}</h5>
                <p class="rsn-txt">Reason: {{ attendance.leaveRequests[1] ? attendance.leaveRequests[1].reason : 'N/A'  }}</p>
            </div>
            <div class="leaveResponse">
                <p class="statusDecoration">{{ attendance.leaveRequests[1] ? attendance.leaveRequests[1].status : 'N/A' }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import attendanceAndLeave from '@/data/attendanceAndLeave';
export default {
    name: 'LeaveStats',
    data() {
        return {
            attendanceAndLeave: attendanceAndLeave
        }
    }
}
</script>
<style scoped>
h3 {
    margin: 5px;
    font-size: 30px;
    color: rgba(126, 123, 123, 0.904);
}
.date{
    margin-bottom: 10px;
    margin-left: 10px;
}
h5 {
    margin: 0;
}

p {
    margin: 1px;
    font-weight: 250;
}
.rsn-txt{
    color: #2c3e50;
    font-weight: 400;
    font-size: 17px;
}

img {
    width: 40px;
    border-radius: 50%;
    margin-left: 8px;
}

.cardtop {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

button {
    width: 85px;
    height: 25px;
    margin-top: 20px;
    margin-right: 10px;
    background-color: white;
    border: 1px solid skyblue;
    border-radius: 5px;
    color: rgb(78, 177, 216);
}

.card2 {
    margin: 0;
    width: 450px;
    height: 350px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 16px 0 rgba(8, 14, 20, 0.312);
}

.Laeveimg {
    width: 50px;
}

.leaveCard {
    text-align: start;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 5px;
}

.leaveRow {
    width: 200px;
    text-align: start;
}

.leaveResponse {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-right: 10px;
}

.statusDecoration {
    background-color: #2c3e50;
    width: 80px;
    height: 30px;
    color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
}
@media screen and (max-width: 1024px) {
    .card2{
        width: 300px;
    }
    .leaveCard{
        width: 300px;
        display: flex;
    }
    .leaveResponse{
        margin: 0;
    }
    .leaveRow{
        width: 150px;
    }
    h3{
        font-size: 25px;
    }
}
@media screen and (max-width: 768px) {
    .card2{
        width: 50%;
    }
    .leaveCard{
        width: 90%;
        display: flex;
        font-size: 1rem;
    }
}
@media screen and (max-width: 480px) {
    .card2{
        width: 100%;
    }
    .leaveCard{
        width: 90%;
        display: flex;
        font-size: 1rem;
    }
}

</style>