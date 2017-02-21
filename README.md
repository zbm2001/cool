# datejs

## 安装
npm i z-date

## 组件接口
对Date原生对象的原型和静态方法做扩展

### Date原型方法和属性

date.setTimeToFirst (方法)  
date.setTimeToLast (方法)  
date.setTimeByDate (方法)  
date.setTimeByNow (方法)  
date.compareTo (方法)  
date.equals (方法)  
date.isBefore (方法)  
date.isAfter (方法)  
date.between (方法)  
date.clone (方法)  
date.addMilliseconds (方法)  
date.addSeconds (方法)  
date.addMinutes (方法)  
date.addHours (方法)  
date.addDays (方法)  
date.addWeeks (方法)  
date.addMonths (方法)  
date.addYears (方法)  
date.getNaturalMonth (方法)  
date.setNaturalMonth (方法)  
date.getDaysPerMonth (方法)  
date.getDaysPerQuarter (方法)  
date.getMonthDays (方法)  
date.getQuarterDays (方法)  
date.getYearDays (方法)  
date.getCenturyDays (方法)  
date.getQuarter (方法)  
date.getCentury (方法)  
date.getQuarterDate (方法)  
date.getYearDate (方法)  
date.getCenturyDate (方法)  
date.isLeapYear (方法)  
date.isAverageYear (方法)  
date.getDateByClassifier (方法)  
date.getRestDaysByClassifier (方法)  
date.getDaysByClassifier (方法)  
date.getDaysByPastClassifiers (方法)  
date.getDaysByPastMonths (方法)  
date.getDaysByPastQuarters (方法)  
date.getDaysByPastYears (方法)  
date.getDaysByPastCenturies (方法)  
date.getDaysByNextClassifiers (方法)  
date.getDaysByNextMonths (方法)  
date.getDaysByNextQuarters (方法)  
date.getDaysByNextYears (方法)  
date.getDaysByNextCenturies (方法)  
date.getYearWeek (方法)  
date.getQuarterWeek (方法)  
date.getMonthWeek (方法)  
date.set (方法)  
date.getUTCOffset (方法)  
date.getTimezone (方法)  
date.setTimezoneOffset (方法)  
date.setTimezone (方法)  
date.format (方法)  

### Date静态方法和属性

Date.i18n (属性)  
Date.isDate (方法)  
Date.validateMillisecond (方法)  
Date.validateSecond (方法)  
Date.validateMinute (方法)  
Date.validateHour (方法)  
Date.validateDay (方法)  
Date.validateDate (方法)  
Date.validateMonth (方法)  
Date.validateNaturalMonth (方法)  
Date.validateYear (方法)  
Date.today (方法)  
Date.getDaysPerMonth (方法)  
Date.getMonthDays (方法)  
Date.getNaturalMonthDays (方法)  
Date.getQuarterDays (方法)  
Date.getYearDays (方法)  
Date.getCenturyDays (方法)  
Date.getCenturyDaysByYear (方法)  
Date.getCentury (方法)  
Date.isLeapYear (方法)  
Date.isAverageYear (方法)  
Date.parse2Date (方法)  
Date.parse2DateFormatsByPeriod (方法)  
Date.parse2DateObjectsByPeriod (方法)  
Date.getTimezoneAbbreviation (方法)  
Date.getTimezoneOffset (方法)  
Date.FORMAT (属性)  
Date.FORMAT_DATE (属性)  
Date.FORMAT_DATETIME (属性)  
Date.UTC_FORMAT (属性)  
Date.pluralClassifiers (属性)  
Date.rPeriod (属性)  

## 组件构建

### 从配置文件构建（rollup.config.js）
npm run build // rollup -c

或者：

### 自定义构建
npm run build:js // node rollup

### 文档生成
npm install -global esdoc
echo '{"source": "./src", "destination": "./doc"}' > .esdoc.json
esdoc
#### 文档
doc/index.html

或者：

### dox
[https://github.com/tj/dox](https://github.com/tj/dox)