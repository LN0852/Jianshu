import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading() {
        return <div>正在加载...</div>
    }
//    异步加载
});

export default () => <LoadableComponent/>
// 无状态组件
