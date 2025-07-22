<template>
    <div class="pg-title">
        <h3>Employee Review</h3>
    </div>
    <div class="r-stats">
        <div class="r-card1">
            <h2 class="r1-title">Average Employee Rating</h2>
            <div class="i-rev">
                <i class="rv-i fa fa-star" aria-hidden="true"></i>
                <p class="r-txt">8.7</p>
            </div>
        </div>
        <div class="r-card2">
            <h2 class="p-title">Average Performance</h2>
            <div class="r-performers">
                <div class="p-item1">
                    <p class="p-txt">Attendance</p>
                    <div class="p-rev">
                        <i class="p-icon fa fa-star" aria-hidden="true"></i>
                        <p class="p-icon-txt">8.6</p>
                    </div>
                </div>
                <div class="p-item2">
                    <p class="p-txt">Work Quality</p>
                    <div class="p-rev">
                        <i class="p-icon fa fa-star" aria-hidden="true"></i>
                        <p class="p-icon-txt">9.2</p>
                    </div>
                </div>
                <div class="p-item3">
                    <p class="p-txt">Productivity</p>
                    <div class="p-rev">
                        <i class="p-icon fa fa-star" aria-hidden="true"></i>
                        <p class="p-icon-txt">8.4</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="heading">
        <table class="table">
            <thead>
                <tr>
                    <th class="h-row" scope="col">#</th>
                    <th class="h-row" scope="col">ID</th>
                    <th class="h-row" scope="col">Name</th>
                    <th class="h-row" scope="col">Role</th>
                    <th class="h-row" scope="col">contact</th>
                    <th class="h-row" scope="col">rating</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(stats,idx) in employee_info" :key="stats.employeeId">
                    <th scope="row">{{ stats.employeeId }}</th>
                    <td>{{ emplyeeRating[idx].workID }}</td>
                    <td>{{ stats.name }}</td>
                    <td>{{ stats.position }}</td>
                    <td>{{ stats.contact }}</td>
                    <td>{{ emplyeeRating[idx].rating }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import employee_info from '@/data/employee_info';
export default {
    name: 'ReviewComp',
    data() {
        return{
            employee_info:employee_info,
            emplyeeRating: [
                {
                    rating: 8.3,
                    workID: 'EMP-909636'
                },
                {
                    rating: 7.7,
                    workID: 'EMP-909665'
                },
                {
                    rating: 8.6,
                    workID: 'EMP-909678'
                },
                {
                    rating: 9.2,
                    workID: 'EMP-909623'
                },
                {
                    rating: 7.9,
                    workID: 'EMP-909987'
                },
                {
                    rating: 8.5,
                    workID: 'EMP-909665'
                },
                {
                    rating: 9.1,
                    workID: 'EMP-909995'
                },
                {
                    rating: 8.0,
                    workID: 'EMP-909623'
                },
                {
                    rating: 7.9,
                    workID: 'EMP-900086'
                },
                {
                    rating: 9.5,
                    workID: 'EMP-909838'
                },
                
            ]
        }
    },
}

</script>

<style>
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
.table {
    width: 100%;
    margin: auto;
    padding-left: 230px;
    box-shadow: 1px 4px 3px 2px rgba(8, 14, 20, 0.312);
}
.table .h-row{
    background-color: #2c3e50;
    color: white;
}
.table th,
td {
    text-align: center;
    border-bottom: 1px solid #2c3e50;
}
.r-stats{
    width: 83%;
    margin-left: 15%;
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.r-card1{
    background-color: white;
    width: 45%;
    height: 100px;
    color: #2c3e50;
    display: flex;
    justify-content: space-around;
    border-radius: 10px;
    align-items: center;
    box-shadow: 0 4px 16px 0 rgba(8, 14, 20, 0.312);
}
.r1-title{
    color: orange;
    font-size: 25px;
}
.rv-i, .r-txt{
    color: orange;
    font-size: 50px;
}
.r-txt{
    margin-top: 5px;
}
.i-rev{
    display: flex;
    background-color: rgba(255, 166, 0, 0.23);
    width: 30%;
    height: 80px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

}
.r-card2{
    background-color: white;
    width: 45%;
    height: 100px;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 16px 0 rgba(8, 14, 20, 0.312);
}
.p-title{
    color: orange;
}
.r-performers{
    display: flex;
    justify-content: space-around;
}
.p-icon{
    color: rgb(255, 165, 0);
    margin-top: 4px;
}
.p-item1, .p-item2, .p-item3{
    width: 30%;
    text-align: center;
}
.p-txt{
    margin: 0;
    font-weight: 400;
}
.p-rev{
    display: flex;
    justify-content: center;
    gap: 10px;
    background-color: rgba(255, 166, 0, 0.356);
    border-radius: 10px;
    color: orange;
    height: 25px;
}
.p-icon-txt{
    font-size: 15px;
    font-weight: 400;
}
.pg-title{
    margin-left: 15%;
    width: 83%;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
}
h3{
    font-size: 40px;
    color: #2c3e50;
}
@media screen and (max-width: 768px) {
    .r1-title{
        font-size: 20px;
        text-align: start;
        width: 65%;
    }
    .rv-i, .r-txt{
        font-size: 25px;
    }
    .i-rev{
        width: 25%;
        height: 50px;
    }
    .p-title{
        font-size: 20px;
    }
    .p-txt{
        font-size: 12px;
    }
    .p-rev{
        width: 60px;
        margin: auto;
    }
    .p-item1, .p-item2, .p-item3{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .p-icon{
        margin-top: 2px;
    }
    .pg-title{
        margin-left: 90px;
    }
    .r-stats{
        margin-left: 90px;
    }
    .heading{
        margin-left: 90px;
    }
}
@media screen and (max-width: 480px) {
    .r-stats{
        display: flex;
        flex-direction: column;
        margin-left: 65px;
    }
    .r-card1, .r-card2{
        width: 100%;
        margin-bottom: 10px;
    }
    .heading{
        margin-left: 65px;
    }
}
</style>