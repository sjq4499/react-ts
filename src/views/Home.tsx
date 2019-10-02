import * as React from 'react';
import { inject, observer } from 'mobx-react';

interface Props {
   list: any;
   user?: any;
   home: any;
}

@inject('home')
@observer
export default class Home extends React.Component<Props> {
   public state = {
      list: []
   };
   public componentDidMount() {
      this.getlist();
   }
   getlist = async () => {
      // const { getList } = this.props.home;
      console.log(this.props.home.getList());
      const list = await this.props.home.getList();
      this.setState({
         list
      });
   };
   public render() {
      const { list } = this.state;
      console.log(list);
      return (
         <div>
            {/* {list.map((item: any) => {
               return <div key={item.username}>{item.username}</div>;
            })} */}
         </div>
      );
   }
}
