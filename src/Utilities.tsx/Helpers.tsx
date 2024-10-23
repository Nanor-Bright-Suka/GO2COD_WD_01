import { format } from 'date-fns';
import { CreateUserProfileProp } from '../Types';
import {UserProps} from "../Types"

export const CreateUserProfile = ({value}: CreateUserProfileProp): UserProps | null => {
    try {
        if (value && value.trim()) {
            const User:  UserProps = {
                name: value,
               date: getFormattedDate(),
               time: formatTime(),
            }
            return User;
        } else {
         return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}


//The Date
const date = new Date();
 const getFormattedDate = () => {
  const day = parseInt(format(date, 'd'));
  const month = format(date, 'MMMM');
  const year = format(date, 'yyyy');

  // Get the appropriate suffix for the day
  const daySuffix = (day: number) => {
    if (day > 3 && day < 21) return 'th'; 
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };
  return `${day}${daySuffix(day)} ${month}, ${year}`;
}


//Time of the date formatted in am or pm
const formatTime = () => {
    const date = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[date.getDay()];

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${day}, ${hours}:${minutes} ${amOrPm}`;
  };
