import { Modal ,message, notification} from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onCloseApprovalModal, onOpenApprovalModal } from '../store';
export const useUiStore = () => {
    const {
        approvalModal

    } = useSelector(state => state.ui);


    const dispatch = useDispatch();


    const openApprovalModal = (title,okText,cancelText,showTextArea=false,onOk=()=>{},onCancel=()=>{}) => {
        dispatch(onOpenApprovalModal({title,okText,cancelText,showTextArea,onOk,onCancel}));
    }

    const closeApprovalModal = () => {
        dispatch(onCloseApprovalModal());
    }

    const toggleApprovalModal = () => {
        (approvalModal.isApprovalModalOpen)
            ? openApprovalModal() :
            closeApprovalModal();
    }

    const showErrorModal = (title,content)=>{
        return Modal.error({
            title:title,
            content:content
        })
    }
    const showSuccessModal = (title,content)=>{
        return Modal.success({
            title:title,
            content:content
        })
    }

    const showInfoModal = (title,content)=>{
        return Modal.info({
            title:title,
            content:content
        })
    }

    const showWarningModal = (title,content)=>{
        return Modal.warning({
            title:title,
            content:content
        })
    }




    return {
        //* Propiedades
        ...approvalModal,
        //* Metodos
        openApprovalModal,
        closeApprovalModal,
        toggleApprovalModal,
        showErrorModal,
        showSuccessModal,
        showInfoModal,
        showWarningModal,
    }
}