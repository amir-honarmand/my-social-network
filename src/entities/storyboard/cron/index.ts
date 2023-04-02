import {CronJob} from 'cron';

const addNewDay = new CronJob("", () => {
    console.log('hello world')
});

addNewDay.start();