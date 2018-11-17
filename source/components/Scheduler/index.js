// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import { api } from '../../REST'; 
// ! Импорт модуля API должен иметь именно такой вид (import { api } from '../../REST')
import Task from '../Task';
import Checkbox from '../../theme/assets/Checkbox';

export default class Scheduler extends Component {
    render () {
        return (
            <section className = { Styles.scheduler }>
                <main>
                    <header>
                        <h1>Планирощик задач</h1>
                        <input placeholder = {`"Поиск"`} />
                    </header>
                    <section>
                        <form>
                            <input placeholder = {`"Описание моей новой задачи"`} type="text" />
                            <button>Добавить задачу</button>
                        </form>
                        <div>
                            <ul>
                             <div>
                                 <Task />
                             </div>
                            </ul>
                        </div>
                    </section>
                    <footer>
                        <Checkbox />
                        <span>Все задачи выполнены</span>
                    </footer>
                </main>
            </section>
        );
    }
}
