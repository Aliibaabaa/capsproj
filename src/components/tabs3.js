import '../components/css/tabs.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import{ 
    Clients, Talents} from './tabs';
    // import {ClientInfo, TalentInfo} from './seemorepages2'

function Talented() {
  // const DEFAULT_ACTIVE_TAB = "Client";
  // const {active_tab} = useParams();
  // const history = useNavigate();
  
  // useEffect(() => {
  //     if(!active_tab){
  //         history.push(`/${DEFAULT_ACTIVE_TAB}`);
  //     }
  // }, []);

  // const toggle = tab => {
  //    if (active_tab !== tab) {
  //         history.push(`/${tab}`);
  //    }
  // }

  return (
    
  
    <>
    
     <Talents />
     
     </>
   
  
  );
}

export default Talented;