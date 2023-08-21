import React, { useEffect, useState } from "react";
import Btn from '@/components/hz-datepicker/style'
import HzInput from "../hz-input";
import dayjs from "dayjs";

const HzDatepicker = () => {
  const [hov, setHov] = useState('hov_before')
  let timer

  let [year, setYear] = useState(dayjs().year())
  let [month, setMonth] = useState(dayjs().month() + 1)
  let _dayList =[]
  let [dayList, setDayList] = useState([])
  //通用日期转化函数：
  const getYearAndMonth = (year1, month1, day1) => {
    let date = new Date(year1, month1, day1)
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    let week = date.getDay()
    return { year, month, day, week }
  }
  // 上一个月最后一天是星期几
  let weekLastMonth = getYearAndMonth(year, month - 1, 0)
  // 本月第一天是星期几
  let weekFirst = getYearAndMonth(year, month - 1, 1)
  // 本月最后一天是星期几
  let weekLast = getYearAndMonth(year, month, 0)
  let getDayList = () => {
    if (weekFirst.week == 1) {
      for (let i = 0; i < weekLast.day; i++) {
        _dayList[i] = i + 1
      }
      for (let i = weekLast.day; i < 42; i++) {
        _dayList[i] = i - weekLast.day + 1
      }
    } else if (weekFirst.week == 2) {
      _dayList[0] = weekLastMonth.day
      for (let i = 1; i < weekLast.day + 1; i++) {
        _dayList[i] = i
      }
      // console.log(weekFirst.day,'22');
      for (let i = weekLast.day + 1; i < 42; i++) {
        _dayList[i] = i - weekLast.day
      }
    } else if (weekFirst.week == 3) {
      _dayList[0] = weekLastMonth.day - 1
      _dayList[1] = weekLastMonth.day
      for (let i = 2; i < weekLast.day + 2; i++) {
        _dayList[i] = i - 1
      }
      for (let i = weekLast.day + 2; i < 42; i++) {
        _dayList[i] = i - weekLast.day - 1
      }
    } else if (weekFirst.week == 4) {
      _dayList[0] = weekLastMonth.day - 2
      _dayList[1] = weekLastMonth.day - 1
      _dayList[2] = weekLastMonth.day
      for (let i = 3; i < weekLast.day + 3; i++) {
        _dayList[i] = i - 2
      }
      for (let i = weekLast.day + 3; i < 42; i++) {
        _dayList[i] = i - weekLast.day - 2
      }
    } else if (weekFirst.week == 5) {
      _dayList[0] = weekLastMonth.day - 3
      _dayList[1] = weekLastMonth.day - 2
      _dayList[2] = weekLastMonth.day - 1
      _dayList[3] = weekLastMonth.day
      for (let i = 4; i < weekLast.day + 4; i++) {
        _dayList[i] = i - 3
      }
      for (let i = weekLast.day + 4; i < 42; i++) {
        _dayList[i] = i - weekLast.day - 3
      }
    } else if (weekFirst.week == 6) {
      _dayList[0] = weekLastMonth.day - 4
      _dayList[1] = weekLastMonth.day - 3
      _dayList[2] = weekLastMonth.day - 2
      _dayList[3] = weekLastMonth.day - 1
      _dayList[4] = weekLastMonth.day
      for (let i = 5; i < weekLast.day + 5; i++) {
        _dayList[i] = i - 4
      }
      for (let i = weekLast.day + 5; i < 42; i++) {
        _dayList[i] = i - weekLast.day - 4
      }
    } else if (weekFirst.week == 0) {
      _dayList[0] = weekLastMonth.day - 5
      _dayList[1] = weekLastMonth.day - 4
      _dayList[2] = weekLastMonth.day - 3
      _dayList[3] = weekLastMonth.day - 2
      _dayList[4] = weekLastMonth.day - 1
      _dayList[5] = weekLastMonth.day
      for (let i = 6; i < weekLast.day + 6; i++) {
        _dayList[i] = i - 5
      }
      for (let i = weekLast.day + 6; i < 42; i++) {
        _dayList[i] = i - weekLast.day - 5
      }
    }


    setDayList(_dayList)

  }

  useEffect(() => {
    // console.log(222);
    // console.log(week, '555');
    getDayList()
    // console.log(_dayList);
    // console.log(weekLastMonth, '上一个月最后一天');
    // console.log(weekFirst);
    // console.log(weekLast);

    // console.log(setYear,'setYear');
    // console.log(dayList[3], '3333333333333');
  }, [month, year])

  return <Btn>
    <>
      <div>
        <HzInput focus={() => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            //根据官网事例，必须在enter和leave里面调用done函数，不然过渡动画不生效（切记）
            setHov('hov_after');
          }, 150);
        }} blur={() => {
          // setHov('hov_before')
        }}></HzInput>
      </div>
      <div className={hov} onMouseEnter={() => {
        setHov('hov_after');
      }} onMouseLeave={() => {
        // setHov('hov_before')
      }}>
        {/* 头部 */}
        <div>
          <span onClick={() => {
            if (year >= 0) {
              setYear(year - 1)
            }
          }
          }>&lt;&lt; </span>
          <span onClick={() => {
            if (month - 1 < 1) {
              setYear(year - 1)
              setMonth(month + 11)
            } else {
              setMonth(month - 1)
            }
          }
          }>&lt;</span>
          <span>
            {year}年
            {month}月
          </span>
          <span onClick={() => {
            console.log(month, 'month');
            if ((month - 1) > 10) {
              setYear(year + 1)
              setMonth(month - 11)
            } else {
              setMonth(month + 1)
            }
          }
          }>&gt;</span>
          <span onClick={() => {
            if (year >= 0) {
              setYear(year + 1)
            }
          }
          }> &gt;&gt;</span>
        </div>
        {/* 表格体 */}
        <div className="picker_content">
          <table>
            <thead>
              <tr>
                <th>一</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
                <th>日</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><div>{dayList[0]}</div></td>
                <td><div>{dayList[1]}</div></td>
                <td><div>{dayList[2]}</div></td>
                <td><div>{dayList[3]}</div></td>
                <td><div>{dayList[4]}</div></td>
                <td><div>{dayList[5]}</div></td>
                <td><div>{dayList[6]}</div></td>
              </tr>
              <tr>
                <td><div>{dayList[7]}</div></td>
                <td><div>{dayList[8]}</div></td>
                <td><div>{dayList[9]}</div></td>
                <td><div>{dayList[10]}</div></td>
                <td><div>{dayList[11]}</div></td>
                <td><div>{dayList[12]}</div></td>
                <td><div>{dayList[13]}</div></td>
              </tr>
              <tr>
                <td><div>{dayList[14]}</div></td>
                <td><div>{dayList[15]}</div></td>
                <td><div>{dayList[16]}</div></td>
                <td><div>{dayList[17]}</div></td>
                <td><div>{dayList[18]}</div></td>
                <td><div>{dayList[19]}</div></td>
                <td><div>{dayList[20]}</div></td></tr>
              <tr>
                <td><div>{dayList[21]}</div></td>
                <td><div>{dayList[22]}</div></td>
                <td><div>{dayList[23]}</div></td>
                <td><div>{dayList[24]}</div></td>
                <td><div>{dayList[25]}</div></td>
                <td><div>{dayList[26]}</div></td>
                <td><div>{dayList[27]}</div></td>
              </tr>
              <tr>
                <td><div>{dayList[28]}</div></td>
                <td><div>{dayList[29]}</div></td>
                <td><div>{dayList[30]}</div></td>
                <td><div>{dayList[31]}</div></td>
                <td><div>{dayList[32]}</div></td>
                <td><div>{dayList[33]}</div></td>
                <td><div>{dayList[34]}</div></td>
              </tr>
              <tr>
                <td><div>{dayList[35]}</div></td>
                <td><div>{dayList[36]}</div></td>
                <td><div>{dayList[37]}</div></td>
                <td><div>{dayList[38]}</div></td>
                <td><div>{dayList[39]}</div></td>
                <td><div>{dayList[40]}</div></td>
                <td><div>{dayList[41]}</div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  </Btn>
};


export default HzDatepicker
