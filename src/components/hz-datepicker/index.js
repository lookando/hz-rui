import React, { useEffect, useState, useRef } from "react";
import Btn from '@/components/hz-datepicker/style'
import HzInput from "../hz-input";
import dayjs from "dayjs";



const HzDatepicker = () => {
  const [hov, setHov] = useState('hov_before')
  let timer
  let inputRef = useRef()
  let pickerRef = useRef()
  const [year, setYear] = useState(dayjs().year())
  const [month, setMonth] = useState(dayjs().month() + 1)
  const [value, setValue] = useState("")
  const [day, setDay] = useState()
  const [isshow, setIsshow] = useState(false)
  let _dayList = []
  const [dayList, setDayList] = useState([{ data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" }, { data: '', style: "" },

  ]);
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
        _dayList.push({ data: i + 1, style: 'current' })
      }
      for (let i = weekLast.day; i < 42; i++) {
        _dayList.push({ data: i - weekLast.day + 1, style: 'next' })
      }
    } else if (weekFirst.week == 2) {
      // _dayList[0] = weekLastMonth.day
      _dayList.push({ data: weekLastMonth.day, style: 'last' })
      for (let i = 1; i < weekLast.day + 1; i++) {
        // _dayList[i] = i
        _dayList.push({ data: i, style: 'current' })
      }

      for (let i = weekLast.day + 1; i < 42; i++) {
        // _dayList[i] = i - weekLast.day
        _dayList.push({ data: i - weekLast.day, style: 'next' })
      }
    } else if (weekFirst.week == 3) {
      _dayList.push({ data: weekLastMonth.day - 1, style: 'last' })
      _dayList.push({ data: weekLastMonth.day, style: 'last' })
      for (let i = 2; i < weekLast.day + 2; i++) {
        _dayList.push({ data: i - 1, style: 'current' })
      }
      for (let i = weekLast.day + 2; i < 42; i++) {
        _dayList.push({ data: i - weekLast.day - 1, style: 'next' })
      }
    } else if (weekFirst.week == 4) {
      _dayList.push({ data: weekLastMonth.day - 2, style: 'last' })
      _dayList.push({ data: weekLastMonth.day - 1, style: 'last' })
      _dayList.push({ data: weekLastMonth.day, style: 'last' })
      for (let i = 3; i < weekLast.day + 3; i++) {
        _dayList.push({ data: i - 2, style: 'current' })
      }
      for (let i = weekLast.day + 3; i < 42; i++) {
        _dayList.push({ data: i - weekLast.day - 2, style: 'next' })
      }
    } else if (weekFirst.week == 5) {
      _dayList.push({ data: weekLastMonth.day - 3, style: 'last' })
      _dayList.push({ data: weekLastMonth.day - 2, style: 'last' })
      _dayList.push({ data: weekLastMonth.day - 1, style: 'last' })
      _dayList.push({ data: weekLastMonth.day, style: 'last' })
      for (let i = 4; i < weekLast.day + 4; i++) {
        _dayList.push({ data: i - 3, style: 'current' })
      }
      for (let i = weekLast.day + 4; i < 42; i++) {
        _dayList.push({ data: i - weekLast.day - 3, style: 'next' })

      }
    } else if (weekFirst.week == 6) {
      _dayList.push({ data: weekLastMonth.day - 4, style: 'last' })
      _dayList.push({ data: weekLastMonth.day - 3, style: 'last' })
      _dayList.push({ data: weekLastMonth.day - 2, style: 'last' })
      _dayList.push({ data: weekLastMonth.day - 1, style: 'last' })
      _dayList.push({ data: weekLastMonth.day, style: 'last' })
      for (let i = 5; i < weekLast.day + 5; i++) {
        _dayList.push({ data: i - 4, style: 'current' })

      }
      for (let i = weekLast.day + 5; i < 42; i++) {
        _dayList.push({ data: i - weekLast.day - 4, style: 'next' })
      }
    } else if (weekFirst.week == 0) {
      _dayList.push({ data: weekLastMonth.day - 5, style: 'last' })
      _dayList.push({ data: weekLastMonth.day - 4, style: 'last' })
      _dayList.push({ data: weekLastMonth.day - 3, style: 'last' })
      _dayList.push({ data: weekLastMonth.day - 2, style: 'last' })
      _dayList.push({ data: weekLastMonth.day - 1, style: 'last' })
      _dayList.push({ data: weekLastMonth.day, style: 'last' })
      for (let i = 6; i < weekLast.day + 6; i++) {
        _dayList.push({ data: i - 5, style: 'current' })
      }
      for (let i = weekLast.day + 6; i < 42; i++) {
        _dayList.push({ data: i - weekLast.day - 5, style: 'next' })
      }
    }
    let str = value.slice(5, 7)
    for (let i = 0; i < 42; i++) {
      if (_dayList[i].data == +day && _dayList[i].style == 'current' && +str == month) {
        _dayList[i].style = `${_dayList[i].style} active`
      }
    }
    setDayList(_dayList)
  }
  let day_click = (item, index) => {
    close_picker()
    let _month = month;
    _month < 10 ? _month = `0${month}` : month;
    let _day = dayList[index].data;
    _day < 10 ? _day = `0${_day}` : _day;
    if (dayList[index].style == 'last') {
      _month--
      if (month - 1 < 1) {
        setYear(year - 1)
        setMonth(12)
        _month = 12
      } else {
        setMonth(_month)
      }
    } else if (dayList[index].style == 'next') {
      _month++

      if ((month - 1) > 10) {
        setYear(year + 1)
        setMonth(1)
        _month = '01'
      } else {
        setMonth(_month)
      }
    }
    if (_month < 10) {
      _month = `0${+_month}`
    }
    setValue(`${year}-${_month}-${_day}`)
    setDay(_day)
  }


  let close_picker = () => {
    picker.style.animation = "slide_out 160ms"
    clearTimeout(timer);
    timer = setTimeout(() => {
      setHov('hov_before');
    }, 150);
  }
  let open_picker = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      picker.style.animation = "slide_in 150ms"
      setHov('hov_after');
    }, 150);
  }
// 点击picker与input的外面时关闭picker
  const clickOut = (e) => {
    let drop = pickerRef.current
    let inputDrop = inputRef.current
    if (!drop.contains(e.target) && !inputDrop.contains(e.target)) {
      close_picker()
    }
  }

  useEffect(() => {
    getDayList()
  }, [month, year, value])

  useEffect(() => {
    document.addEventListener('click', clickOut)
  }, [])
  return <Btn>
    < >
      <div onClick={()=>{open_picker()}}>
        <HzInput inputRef={inputRef} change={(x) => {
        }}

          blur={() => {
            // setHov('hov_before')
          }} value={value}></HzInput>
      </div>
      <div ref={pickerRef} id='picker' className={hov}
        onClick={() => {
          inputRef.current.focus()
        }}>
        {/* 头部 */}
        <div className="picker_header">
          <button onClick={() => {
            if (year >= 0) {
              setYear(year - 1)
            }
          }
          }>&lt;&lt; </button>
          <button onClick={() => {
            if (month - 1 < 1) {
              setYear(year - 1)
              setMonth(month + 11)
            } else {
              setMonth(month - 1)
            }
          }
          }>&lt;</button>
          <span>
            {year}年
            {month}月
          </span>
          <button onClick={() => {
            if ((month - 1) > 10) {
              setYear(year + 1)
              setMonth(month - 11)
            } else {
              setMonth(month + 1)
            }
          }
          }>&gt;</button>
          <button onClick={() => {
            if (year >= 0) {
              setYear(year + 1)
            }
          }
          }> &gt;&gt;</button>
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
            <tbody >
              <tr>
                {dayList.map((item, index) => {
                  if (index < 7) { return <td><div onClick={() => { day_click(item, index) }} className={dayList[index].style}>{dayList[index].data}</div></td> }
                })}
              </tr>
              <tr>
                {dayList.map((item, index) => {
                  if (index > 6 && index < 14) { return <td><div onClick={() => { day_click(item, index) }} className={dayList[index].style}>{dayList[index].data}</div></td> }
                })}
              </tr>
              <tr>
                {dayList.map((item, index) => {
                  if (index > 13 && index < 21) { return <td><div onClick={() => { day_click(item, index) }} className={dayList[index].style}>{dayList[index].data}</div></td> }
                })}
              </tr>
              <tr>
                {dayList.map((item, index) => {
                  if (index > 20 && index < 28) { return <td><div onClick={() => { day_click(item, index) }} className={dayList[index].style}>{dayList[index].data}</div></td> }
                })}
              </tr>
              <tr>
                {dayList.map((item, index) => {
                  if (index > 27 && index < 35) { return <td><div onClick={() => { day_click(item, index) }} className={dayList[index].style}>{dayList[index].data}</div></td> }
                })}
              </tr>
              <tr>
                {dayList.map((item, index) => {
                  if (index > 34 && index < 42) { return <td><div onClick={() => { day_click(item, index) }} className={dayList[index].style}>{dayList[index].data}</div></td> }
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  </Btn>
};


export default HzDatepicker
