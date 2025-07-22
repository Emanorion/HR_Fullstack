<template>
    <div class="ReviewCard">
        <h3 class="rev-title">Reviews</h3>
        <div class="reviews">
            <div class="review-items" v-for="(employee,idx) in employee_info.slice(0,5)" :key="employee.employeeId">
                <div class="pfp">
                    <img class="rev-img" :src="imgAndRating[idx].img" alt="hah">
                </div>
                <div class="top">
                    <h5 class="rev-name">{{ employee.name }}</h5>
                    <p class="review">{{ employee.position }}</p>
                </div>
                <div class="bottom">
                    <div class="rev-icon">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <p class="icon-txt">{{ imgAndRating[idx].rating }}</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="rv-btn-div">
            <router-link to="/reviews"><button class="rev-btn">see more</button></router-link>
        </div>
    </div>
</template>

<script>
import employee_info from '@/data/employee_info';
export default {
    name: 'EmployeeReview',
    data(){
        return{
            employee_info:employee_info,
            imgAndRating:[
                {
                img: "https://img.freepik.com/free-photo/portrait-african-american-man_23-2149072179.jpg?semt=ais_hybrid&w=740",
                rating: 8.3
                },
                {
                img: "https://media.istockphoto.com/id/1174056245/photo/some-moments-require-some-seriousness.jpg?s=612x612&w=0&k=20&c=dPqQQq6wiygApzSF9r72B9p6Bp4pygxm3M7aqC1oae8=",
                rating: 7.7
                },
                {
                img: "https://img.freepik.com/premium-photo/minimal-close-up-portrait-serious-black-man-looking-camera-while-standing-by-white-wall-copy-s_236854-34801.jpg",
                rating: 8.6
                },
                {
                img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
                rating: 9.2
                },
                {
                img: "https://img.freepik.com/free-photo/beautiful-african-woman-face-portrait-close-up_53876-148041.jpg?semt=ais_items_boosted&w=740",
                rating: 7.9
                },
            ]
        }
    }
}
</script>

<style scoped>
.rev-title{
    padding: 20px;
    font-size: 30px;
    color: rgba(126, 123, 123, 0.904);
}
.ReviewCard {
    background-color: white;
    margin-left: 10px;
    width: 400px;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 16px 0 rgba(8, 14, 20, 0.312);
}
.review-items{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.pfp{
    width: 15%;
    align-content: center;
}
.top{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: center;
    width: 50%;
}
.bottom{
    display: flex;
    width: 20%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3px;
    margin-top: 5px;
}
.rev-img{
    width: 50px;
    border-radius: 6px;
}
.rev-icon{
    background-color: rgba(245, 171, 33, 0.226);
    width: 60px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 30px;
    border-radius: 10px;
}
.icon-txt{
    margin-top: 10px;
    color: orange;
    font-weight: 400;
}
.reviews{
    margin: 0;
    font-weight: 300;
    height: 75%;
}
.review{
    color: #333;
    font-weight: 400;
}
.rev-btn{
    width: 100%;
    height: 30px;
    background-color: white;
    border: 1px solid skyblue;
    border-radius: 5px;
    color: rgb(78, 177, 216);
}
.rv-btn-div{
    width: 90%;
    margin: auto;
}
.fa{
    color: orange;
    border-radius: 5px;
    width: 15px;
}
@media screen and (max-width: 1024px) {
    .ReviewCard{
        width: 300px;
    }
}
@media screen and (max-width: 768px) {
    .ReviewCard{
        width: 100%;
        height: 100%;
    }
    .rev-img{
        width: 80px;
    }
    .rev-title{
        padding: 10px;
    }
    .rv-btn-div{
        padding: 10px;
    }
}
@media screen and (max-width: 480px) {
    .bottom{
        width: 15%;
    }
    .top{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>