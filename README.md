# 🌍 World Clock

A responsive **World Clock web app** built with **HTML, CSS, and JavaScript**, using the **Moment.js + Moment Timezone** library to handle multiple time zones.  

This project allows users to view the current date and time across different cities worldwide, with real-time updates.  

---

## 🚀 Features
- 🕒 Displays the current time for multiple cities  
- 🌍 Timezone support with **Moment.js + Moment Timezone**  
- 📅 Shows both date and time in formatted style  
- 🔄 Live updating every second  
- 🎨 Clean and responsive design (works on desktop & mobile)  

---

## 🛠️ Tech Stack
- **HTML** – Page structure  
- **CSS** – Styling and layout  
- **JavaScript** – Time updates  
- **Moment.js + Moment Timezone** – Handling global time zones

---

## ⚡ How It Works
1. The app loads with default cities (London, Sydney, Tokyo, Paris).  
2. JavaScript uses `moment()` and `moment.tz()` to fetch and format each city’s current time.  
3. The display updates every second with `setInterval()`.  
4. Users can also select a city from a dropdown menu to see its local time.
