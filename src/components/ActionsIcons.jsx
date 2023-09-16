import {GrView } from 'react-icons/gr'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch,useSelector } from 'react-redux';
import { AcceptRejectNotes ,getNotesAdmin} from '../redux/notes/noteActions';


const ActionIcon=({ icon, note })=> {
    const dispatch = useDispatch();
  

    const HandleAcceptRejectNotes = (id) => async () => {
        await dispatch(AcceptRejectNotes(id));
        await dispatch(getNotesAdmin());
    };


    return (
      <div className="flex items-center space-x-2 cursor-pointer hover:text-purple-500 hover:scale-110">
        {icon === 'edit' && <GrView  onClick={
            ()=>{
                console.log(note)
            }

        } />}
        {icon === 'delete' && <AiFillDelete />}
        {icon === 'accept' && (
          <button
            onClick={HandleAcceptRejectNotes(note._id)}
            className={`px-2 py-1 ${
              !note?.acceptedStatus ? 'bg-green-500 text-white' : 'bg-red-600 text-white '
            } rounded font-bold`}
          >
            {note?.acceptedStatus ? 'Reject' : 'Accept'}
          </button>
        )}
      </div>
    );

}


export default ActionIcon