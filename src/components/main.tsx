import * as React from "react";

export class Main extends React.Component<any, any> {

  private name: Array<string> = ["Hello", "World!"];
  public state: any;

  constructor(props: any, context?: any){
    super(props, context);
    this.state = { content: props.content }
  }

  public render() {
      return (
        <div>
          {this.state.content} { ...this.name }
        </div>
      );   
  }
}