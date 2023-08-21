<script setup>
import { computed, onMounted, ref} from 'vue';
const emit =defineEmits(['get-date'])
//今天：
const today=ref({
    year:0,
    month:0,
    day:0,
    week:0
})
//组件加载时获取今天的时间：
const getToday=()=>{
    let date=new Date()
    today.value.year=date.getFullYear()
    today.value.month=date.getMonth()+1
    today.value.day=date.getDate()
    today.value.week=date.getDay()
}
onMounted(()=>{
    getToday()
    Year.value=today.value.year
    Month.value=today.value.month
})
 
//通用日期转化函数：
const getYearAndMonth=(year1,month1,day1)=>{
    let date=new Date(year1,month1,day1)
    
    let year=date.getFullYear()
    let month=date.getMonth()
    let day=date.getDate()
    let week=date.getDay()
    return { year,month,day,week}
}
//日历时间：  当前的 年 月 默认值是今天所在年月：
const Year=ref(0)
const Month=ref(0)
const list=ref([])
//该月日历：
const monthList=()=>{
   //获取该月第一天的数据    (周几) day.week
   let day= getYearAndMonth(Year.value,Month.value-1, 1)
   // 获取本月天数
   let dayNumber=new Date(Year.value,Month.value, 0).getDate();
   //获取上月天数：
   let dayNumberLastMonth=new Date(Year.value,Month.value-1, 0).getDate();
   let dayArr=Array(42)
   //修改数据  （因为周1到周6对应为1-6  周日对应为0 ）
   let week
   if(day.week===0){
      week=7
   }else{
      week=day.week
   }
   //上个月数据：
   for(let i=0;i<=week-2;i++){
       let date=dayNumberLastMonth-(week-2-i)
       let month=0
       dayArr[i]={date:date,month:month}
   }
   //本月数据：
   for(let i=week-1;i<=week-1+dayNumber-1;i++){
       let date=i-(week-2)
       let month=1
       dayArr[i]={date:date,month:month}
   }
   for(let i=week-1+dayNumber;i<=41;i++){
       let date=i-(week-2+dayNumber)
       let month=2
       dayArr[i]={date:date,month:month}
   }
   //下个月数据：
   list.value=dayArr
 
}
onMounted(()=>{
    monthList()
})
//点击上一年按钮   <<
const prevYear=()=>{
    Year.value--
    monthList()
}
//点击上一月按钮    <
const prevMonth=()=>{
    if(Month.value===1){
        Month.value=12
        Year.value--
    }else{
        Month.value--
    }
    monthList()
}
//点击下一月按钮    >
const nextMonth=()=>{
    if(Month.value===12){
        Month.value=1
        Year.value++
    }else{
        Month.value++
    }
    monthList()
}
//点击下一年按钮    >>
const nextYear=()=>{
    Year.value++
    monthList()
}
//点击今天按钮：
const toToday=()=>{
    Month.value=today.value.month
    Year.value=today.value.year
    monthList()
}
//是否显示 日历：
const isShow=ref(false)
//inout 聚焦 显示日历 
const show=()=>{
    isShow.value=true
}
//所选择的日期数据：
const chooseDate=ref({
    year:'',
    month:'',
    day:'',
})
//input 显示的样式：
const  chooseDateShow=computed(()=>{
    //防止输出 --
    return  chooseDate.value.day?`${chooseDate.value.year}-${chooseDate.value.month}-${chooseDate.value.day}`:''
})
//点击日期：
const clickDate=(val)=>{
    //点击的是上个月的日期
    if(val.month===0){
        prevMonth()
    }
    //点击的是本月的日期
    if(val.month===1){
        chooseDate.value. year=Year.value
        chooseDate.value.month=Month.value
        chooseDate.value.day=val.date
        //向父组件发送数据：
        emit('get-date',chooseDateShow.value)
        //选择完 关闭日历
        isShow.value=false
    }
    //点击的是下个月的日期
    if(val.month===2){
        nextMonth()
    }
}
//点击关闭按钮：
const close=()=>{
    isShow.value=false
}
 
//自定义指令  （点击盒子外面，关闭日历：）
// 定义局部自定义指令，这里是在 setup 标签下编写，指令名称以 v 开头，无需额外注册逻辑
 
const vClickOutside = {
    mounted(el, binding) {
        function eventHandler(e) {
            if (el.contains(e.target)) {
                return false
            }
            // 如果绑定的参数是函数，正常情况也应该是函数，执行
            if (binding.value && typeof binding.value === 'function') {
                binding.value(e)
            }
        }
        // 用于销毁前注销事件监听
        el.__click_outside__ = eventHandler
        // 添加事件监听
        document.addEventListener('click', eventHandler)
    },
    beforeUnmount(el) {
        // 移除事件监听
        document.removeEventListener('click', el.__click_outside__)
        // 删除无用属性
        delete el.__click_outside__
    }
}
// 自定义指令参数，点击外部区域的处理函数，如关闭弹窗
const onClickOutside = () => {
    isShow.value=false
}
 
</script>
 
 
<template>
 <div class="picker" v-click-outside="onClickOutside">
        <input class="input"  :value="chooseDateShow" @focus="show">
        <div class="box" v-if=" isShow">
            <div class="header">
                <div class="btn" @click="prevYear" > {{'<<'}} </div>
                <div class="btn" @click="prevMonth"> {{'<'}} </div>
                <div class="year">  {{ Year }}年 {{ Month }}月</div>
                <div class="btn" @click="nextMonth">{{'>'}} </div>
                <div class="btn" @click="nextYear">{{'>>'}} </div>
            </div>
            <div class="content">
                <div class="week">
                    <div class="weekday">一</div>
                    <div class="weekday">二</div>
                    <div class="weekday">三</div>
                    <div class="weekday">四</div>
                    <div class="weekday">五</div>
                    <div class="weekday">六</div>
                    <div class="weekday">日</div>
                </div>
                <div class="cont">
                    <div class="cont-day"  v-for="(item,index) in list" 
                    :key="index" 
                    :class="{'noActiveMonth':item.month!==1,'activeDay'
                    :Year==today.year&&Month==today.month&&item.date==today.day ,'chooedDay'
                    :Year==chooseDate.year&&Month==chooseDate.month&&item.date==chooseDate.day}" @click="clickDate(item)">
                    {{ item.date }}
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="today" @click="toToday">今天:{{ today.year }}-{{ today.month }}-{{ today.day }}</div>
                <button @click="close">关闭</button>
            </div>
        </div>
    </div>
</template>
 
 
<style scoped lang="scss">
*{box-sizing: border-box;}
.picker {
    
    width: 212px;
    height: 310px;
  
    // background-color: red;
    
   
    position: relative;
    .input{
        width: 100%;
        height: 30px;
    }
    .box {
        border: 1px solid #ccc;
        position: absolute;
        z-index: 999;
        .header {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border-bottom: 1px solid #ccc;
            .btn {
                cursor: pointer;
                text-align: center;
            }
            .btn:hover{
                color: green;
                cursor: pointer;
            }
        }
        .content {
            .week {
                display: flex;
                align-items: center;
                width: 100%;
                .weekday {
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    align-items: center;
                    text-align: center;
                }
            }
            .cont {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                .cont-day {
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    align-items: center;
                    text-align: center;
                    border-radius: 5px;
                }
                .cont-day:hover{
                    color: skyblue;
                    cursor: pointer;
                }
          
            }
        }
        .footer {
            height: 30px;
            display: flex;
            justify-content: space-between;
            padding: 1px;
            border-top: 1px solid #ccc;
            .today{
                cursor: pointer;
                height: 30px;
                line-height: 30px;
            }
            button{
                background-color: #fff;
                border:1px solid grey;
                border-radius: 5px;
                
            }
        }
     
    }
}
 
.noActiveMonth{
    /* 当前月 */
    color: rgb(185, 183, 183);
}
.activeDay{
    /* 今天 */
    background-color: rgb(229, 165, 165);
    
}
.chooedDay{
    /* 选中的日期 */
    border:1px solid blue
}
</style>