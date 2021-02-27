import List from '../List';

interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}

const routes: IRoute[] = [
    {
        path: '/',
        name: 'List Page',
        component: List,
        exact: true
    },
    
]

export default routes;