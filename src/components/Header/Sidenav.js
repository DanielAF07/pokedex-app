
import { useDispatch } from 'react-redux'
import { shufflePokemonAction } from '../../actions/pokemonAction'
import '../../styles/sidenav.scss'
import {ReactComponent as ShuffleIcon} from '../../assets/shuffle.svg'

const Sidenav = ({show, setShow}) => {

  const dispatch = useDispatch()

  const handleClickShuffle = () => {
    dispatch(shufflePokemonAction())
    setShow(false)
  }

  return (
    <div className={`sidenav ${show ? 'show' : ''}`}>
      <ul>
        <li>
          <a 
            href="#!"
            onClick={handleClickShuffle}
          ><ShuffleIcon /> Shuffle</a>
        </li>
      </ul>
    </div>
  );
}
 
export default Sidenav;