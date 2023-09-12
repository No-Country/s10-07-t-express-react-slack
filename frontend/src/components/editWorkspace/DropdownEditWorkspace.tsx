import { FC, useState } from 'react'
import {BiEdit} from 'react-icons/bi'

export interface OptionsEdit {
  editWorkspace?: boolean;
  editUsers?: boolean;
  editChannels?: boolean;
}

export interface Props {
  state?: OptionsEdit;
  setState: (value: any) => void;
}

export enum Options {
  editWorkspace = "editWorkspace",
  editUsers = "editUsers",
  editChannels = "editChannels"
}

const DropdownEditWorkspace: FC<Props> = ({ setState }) => {

  const [dropdownHidden, setDropdownHidden] = useState<boolean>(true)

  const handleClick = (attr: Options) => {
    setState((prevState: OptionsEdit) => {
      const updatedState: OptionsEdit = {};

      // Establece todos los atributos en false
      for (const key in prevState) {
        if (prevState.hasOwnProperty(key)) {
          const typedKey: Options = Options[key as keyof typeof Options];
          if (typedKey) {
            updatedState[typedKey] = true;
          }
        }
      }

        // Luego, establece el atributo en attr en true
        updatedState[attr] = false;

      

      return updatedState;
    })
  }

  return (
    <div className='relative'>
      <button
        onClick={() => setDropdownHidden(!dropdownHidden)}
        className="" type="button">
          <div className='text-2xl'>
            <BiEdit />
          </div>
      </button>
      <div id="dropdown" className={`${dropdownHidden ? 'hidden' : 'flex'} absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-56 p-3`}>
        <ul className="flex flex-col gap-y-2 text-sm text-gray-700" >
          <li>
            <button onClick={() => handleClick(Options.editWorkspace)}>Editar espacio de trabajo</button>
          </li>
          <li>
            <button onClick={( ) => handleClick(Options.editChannels)}>Administrar canales</button>
          </li>
          <li>
            <button onClick={( ) => handleClick(Options.editUsers)}>Administrar miembros</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default DropdownEditWorkspace;
