import {Component} from 'react'

import AppInfo from '../app-info/app-info';
import SearchPanel from '../searc-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: 'Nikita V.', salary: 3500, increase:false,like: true, id:1},
                {name: 'Andrew L.', salary: 345, increase: true,like: false, id:2},
                {name: 'Victory T.', salary: 560, increase:false,like: false, id:3},
                {name: 'Antony W.', salary: 1350, increase:false,like: false, id:4}
            ],
            term: '',
            filter:'all'
        }
    }

    addNewItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            like:false,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr= [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter( item => item.id !== id),
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    onShowInfo = () => {
        this.setState(({data}) => data.length)
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) >-1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like);
            case 'moreThan1000':
            return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter)

        return (
            <div className="app">
                <AppInfo
                employees={employees}
                increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                    filter ={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                addNewItem={this.addNewItem}/>
            </div>
        )
    }
}

export default App;