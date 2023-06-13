import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import i18n from './../../i18n'
import {log} from "util";


export default function ToggleLang(){
  
  const options:string[] = [
    'en', 'bn', 'ar'
  ];
  
  const changLang=({value , label}:{value:string; label:string})=>{
    
    i18n.changeLanguage(value).finally()
  }
  
  const defaultOption = options[0];
  return(
  // @ts-ignore
  <Dropdown options={options} onChange={changLang}  value={defaultOption}  />
  )
}
