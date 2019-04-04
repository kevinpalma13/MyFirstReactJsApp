import React, {Component} from 'react';

class TaskForm extends Component{
    constructor(){
        super();
        this.state = {
          title: '',
          responsable: '',
          description: '',
          priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleInput(e){
        const { value,name } = e.target;
        this.setState({
            [name]: value
        })
      }

      handleSubmit(e){
        e.preventDefault(); //Evita refrescar la página
        this.props.onAddTarea(this.state);
      }

      render (){
          return (
                <div className="card mt-4">
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="title" className="form-control" placeholder="Title" onChange={this.handleInput} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="responsable" className="form-control" placeholder="Responsable" onChange={this.handleInput} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="description" className="form-control" placeholder="Description" onChange={this.handleInput} />
                        </div>
                        <div className="form-group">
                            <select name="prioriy" className="form-control" onChange={this.handleInput}>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
          );
      }
}

export default TaskForm;