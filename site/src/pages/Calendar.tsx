import React, { useEffect, useState } from 'react'

type EventItem = {
  id: string
  name: string
  date: string // yyyy-mm-dd
  time?: string
  owner?: string
}

function uid() {
  return Math.random().toString(36).slice(2, 9)
}

const STORAGE_KEY = 'calendar_events'
const USER_KEY = 'calendar_user'

export default function Calendar(){
  const [date] = useState(new Date())
  const [displayDate, setDisplayDate] = useState(new Date())
  const [events, setEvents] = useState<EventItem[]>([])
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [newName, setNewName] = useState('')
  const [newTime, setNewTime] = useState('')

  useEffect(()=>{
    const raw = localStorage.getItem(STORAGE_KEY)
    if(raw) setEvents(JSON.parse(raw))
    const u = localStorage.getItem(USER_KEY)
    if(u) setUsername(u)
  }, [])

  useEffect(()=>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
  }, [events])

  function prevMonth(){
    const d = new Date(displayDate)
    d.setMonth(d.getMonth() - 1)
    setDisplayDate(d)
  }
  function nextMonth(){
    const d = new Date(displayDate)
    d.setMonth(d.getMonth() + 1)
    setDisplayDate(d)
  }

  function daysForMonth(dt: Date){
    const start = new Date(dt.getFullYear(), dt.getMonth(), 1)
    const end = new Date(dt.getFullYear(), dt.getMonth()+1, 0)
    const days: Array<{num:number, currentMonth:boolean}> = []
    const startDay = start.getDay()
    const prevEnd = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate()
    for(let i = startDay; i>0; i--){
      days.push({ num: prevEnd - i + 1, currentMonth: false })
    }
    for(let i=1;i<=end.getDate();i++) days.push({ num: i, currentMonth: true })
    const endDay = end.getDay()
    const nextDays = 6 - endDay
    for(let i=1;i<=nextDays;i++) days.push({ num: i, currentMonth: false })
    return days
  }

  function eventsForDay(year:number, month:number, day:number){
    const d = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
    return events.filter(e => e.date === d)
  }

  function addEvent(){
    if(selectedDay == null) return
    const y = displayDate.getFullYear()
    const m = displayDate.getMonth()
    const d = selectedDay
    const newEvent: EventItem = { id: uid(), name: newName || 'Untitled', date: `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`, time: newTime, owner: username || 'local' }
    setEvents(prev => [...prev, newEvent])
    setNewName('')
    setNewTime('')
  }

  function removeEvent(id:string){
    setEvents(prev => prev.filter(e => e.id !== id))
  }

  function login(name:string){
    localStorage.setItem(USER_KEY, name)
    setUsername(name)
  }

  function logout(){
    localStorage.removeItem(USER_KEY)
    setUsername(null)
  }

  const days = daysForMonth(displayDate)
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]

  return (
    <div>
      <h2 style={{textAlign:'center'}}>{monthNames[displayDate.getMonth()]} {displayDate.getFullYear()}</h2>
      <div style={{display:'flex', gap:12, justifyContent:'center', marginBottom:12}}>
        <button onClick={prevMonth} className="project_button">Prev</button>
        <button onClick={nextMonth} className="project_button">Next</button>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:6}} className="num_days">
        {days.map((d, idx) => (
          <div key={idx} id={String(d.num)} className={d.currentMonth? 'day' : 'prev-date'} onClick={()=>{ if(d.currentMonth) setSelectedDay(d.num) }} style={{padding:8, border: '1px solid #eee', minHeight:60, cursor: d.currentMonth? 'pointer' : 'default', background: (selectedDay===d.num && d.currentMonth)? '#eef' : undefined}}>
            <div style={{fontWeight:600}}>{d.num}</div>
            {d.currentMonth && (()=>{
              const evs = eventsForDay(displayDate.getFullYear(), displayDate.getMonth(), d.num)
              return evs.slice(0,2).map(e => <div key={e.id} style={{fontSize:12}}>{e.time? `${e.time} — `: ''}{e.name}</div>)
            })()}
          </div>
        ))}
      </div>

      <div style={{marginTop:20}}>
        <h3>Day details</h3>
        {selectedDay == null ? <div>Select a day to see/add events.</div> : (
          <div>
            <div style={{marginBottom:8}}>Selected: {selectedDay}</div>
            <div>
              {eventsForDay(displayDate.getFullYear(), displayDate.getMonth(), selectedDay).map(ev => (
                <div key={ev.id} style={{borderBottom:'1px solid #ddd', padding:6}}>
                  <div style={{fontWeight:700}}>{ev.time? `${ev.time} ` : ''}{ev.name}</div>
                  <div style={{fontSize:12, color:'#666'}}>Owner: {ev.owner}</div>
                  <button onClick={()=>removeEvent(ev.id)} style={{marginTop:6}}>Delete</button>
                </div>
              ))}
            </div>

            <div style={{marginTop:12}}>
              <input placeholder="Event name" value={newName} onChange={e=>setNewName(e.target.value)} />
              <input placeholder="Time (optional)" value={newTime} onChange={e=>setNewTime(e.target.value)} style={{marginLeft:8}} />
              <button onClick={addEvent} style={{marginLeft:8}}>Add</button>
            </div>
          </div>
        )}
      </div>

      <div style={{marginTop:20}}>
        <h3>Account</h3>
        {username ? (
          <div>
            <div>Signed in as <b>{username}</b></div>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <input id="local_login" placeholder="Enter a username to sign in locally" />
            <button onClick={()=>{ const el = document.getElementById('local_login') as HTMLInputElement; if(el && el.value) login(el.value)}} style={{marginLeft:8}}>Sign in</button>
          </div>
        )}
      </div>
    </div>
  )
}
