import React, { useState } from 'react';
import styled from 'styled-components';
import { X, User, Building2, Mail } from 'lucide-react';
import axios from 'axios';
import { message } from 'antd';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  source: string;
}

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  animation: fadeIn 0.3s ease-in-out;
`;

const ModalContainer = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  max-width: 500px;
  width: 100%;
  margin: 0 16px;
  position: relative;
  animation: slideIn 0.3s ease-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  color: #64748b;
  transition: color 0.2s, transform 0.2s;
  border: none;
  border-radius: 50%;
  background: transparent;
  &:hover {
    color: #334155;
    transform: rotate(90deg);
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
  background: linear-gradient(to right, #06b6d4, #3b82f6);
  -webkit-background-clip: text;
  color: transparent;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: medium;
  color: #64748b;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: #f1f5f9;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  color: #1e293b;
  transition: border-color 0.3s, box-shadow 0.3s;
  &:focus {
    border-color: #3b82f6;
    outline: none;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  background: linear-gradient(to right, #06b6d4, #3b82f6);
  color: #ffffff;
  border-radius: 8px;
  font-weight: bold;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #06b6d4, #3b82f6);
    box-shadow: 0 4px 6px rgba(6, 182, 212, 0.25);
    transform: scale(1.05);
  }
`;

export function ContactForm({ isOpen, onClose, source }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    contact: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, source });
    if (source === 'demo') {
      console.log('预约产品演示');
      setLoading(true);
      setError(null);
      message.loading('发送中...');
      try {
        const response = await axios.post(' http://192.168.0.205:5000/add_user', {
            name: formData.name,
            organization: formData.organization,
            contact: formData.contact,
        }, {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        alert('数据已发送');
        setFormData({
            name: '',
            organization: '',
            contact: '',
        });
        } catch (err) {
        console.error(err);
        setError('发送失败');
        message.error('发送失败');
        alert('发送失败: ' + err);
        } finally {
        setLoading(false);
        }
    }
    if (source === 'join') {
        console.log('加入我们');
        setLoading(true);
        setError(null);
        try {
          const response = await axios.post(' http://192.168.0.205:5000/add_joiner', {
              name: formData.name,
              organization: formData.organization,
              contact: formData.contact,
          }, {
              headers: {
              'Content-Type': 'application/json'
              }
          });
          alert('数据已发送');
          setFormData({
              name: '',
              organization: '',
              contact: '',
          });
          } catch (err) {
          console.error(err);
          setError('发送失败');
          alert('发送失败: ' + err);
          } finally {
          setLoading(false);
          }
    }
    if (source === 'start') {
        console.log('开始使用');
        setLoading(true);
        setError(null);
        try {
          const response = await axios.post(' http://192.168.0.205:5000/add_user', {
              name: formData.name,
              organization: formData.organization,
              contact: formData.contact,
          }, {
              headers: {
              'Content-Type': 'application/json'
              }
          });
          alert('数据已发送');
          setFormData({
              name: '',
              organization: '',
              contact: '',
          });
          } catch (err) {
          console.error(err);
          setError('发送失败');
          message.error('发送失败');
          alert('发送失败: ' + err);
          } finally {
          setLoading(false);
          }
    }
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>
        <Title>
          {source === 'demo' && '预约产品演示'}
          {source === 'join' && '加入我们'}
          {source === 'start' && '开始使用'}
        </Title>
        <Form 
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
          <div 
            style={{
                width: '80%',
            }}
          >
            <Label>
              <User size={16} className="text-cyan-500" /> 姓名
            </Label>
            <br/>
            <Input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="请输入您的姓名"
            />
          </div>
          <div
            style={{
                width: '80%',
            }}
          >
            <Label>
              <Building2 size={16} className="text-cyan-500" /> 个人/组织/单位
            </Label>
            <br/>
            <Input
              type="text"
              required
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="请输入您的组织名称"
            />
          </div>
          <div
            style={{
                width: '80%',
            }}
          >
            <Label>
              <Mail size={16} className="text-cyan-500" /> 联系方式
            </Label>
            <br/>
            <Input
              type="text"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              placeholder="请输入您的电话/微信/邮箱"
            />
          </div>
          <br/>
          <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
          >
            <SubmitButton 
                type="submit"
                style={{
                    width: '70%',
                    border: 'none',
                }}
            >
              提交
            </SubmitButton>
          </div>
        </Form>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default ContactForm;