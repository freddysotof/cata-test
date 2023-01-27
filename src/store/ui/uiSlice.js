import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        approvalModal: {
            isApprovalModalOpen: false,
            okText: '',
            cancelText: '',
            title:'',
            onOk:()=>{},
            onCancel:()=>{},
            showTextArea:false

        }

    },
    reducers: {
        onOpenApprovalModal: (state, { payload }) => {
            state.approvalModal.isApprovalModalOpen = true;
            state.approvalModal.okText = payload.okText;
            state.approvalModal.cancelText = payload.cancelText;
            state.approvalModal.title = payload.title;
            state.approvalModal.onOk = payload.onOk;
            state.approvalModal.onCancel = payload.onCancel;
            state.approvalModal.showTextArea = payload.showTextArea;
        },
        onCloseApprovalModal: (state) => {
            state.approvalModal.isApprovalModalOpen = false;
        }
    }
});
// Action creators are generated for each case reducer function
export const { onOpenApprovalModal, onCloseApprovalModal } = uiSlice.actions;
//! https://react-redux.js.org/tutorials/quick-start