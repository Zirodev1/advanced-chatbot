import {Menu, Transition } from '@headlessui/react';
import Icon from '../icon/icon';

const MenuChat = ({className, buttonIcon}) => {
 
  return (
    <div className={className}>
      <Menu>
        {buttonIcon ? (
          <Menu.Button className="flex justify-center items-center w-11 h-11">
            <Icon 
              className="w-6 h-6 fill-n-5 transition-colors ui-open:fill-primary-3 dark:fill-n-3"
              name="message"
            />
          </Menu.Button>
        ): (
          <Menu.Button className="flex items-center max-w-full text-left text-h6 transition-colors md:text-body-1 hover:text-primary-3 tap-highlight-color">

          </Menu.Button>
        )

        }
      </Menu>
    </div>
  )

}

export default MenuChat;