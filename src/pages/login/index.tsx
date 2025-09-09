import logo from '@/assets/logo.png?url';
import Banner from '@/assets/svg/banner.svg?react';
import { LayoutFooter } from '@/layout';
import { LanguageButton } from '@/layout/layout-header/components/language-button';
import { ThemeButton } from '@/layout/layout-header/components/theme-button';
import { Col, Row, theme } from 'antd';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { FormComponentMapType } from './form-mode-context';
import { FORM_COMPONENT_MAP, FormModeContext } from './form-mode-context';

export default function Login() {
    const { token } = theme.useToken();
    const { t } = useTranslation();
    const [formMode, setFormMode] = useState<FormComponentMapType>('login');

    const providedValue = useMemo(() => ({ formMode, setFormMode }), [formMode, setFormMode]);

    return (
        <div
            style={{
                backgroundColor: token.colorBgContainer,
            }}
        >
            <header className="z-10 absolute flex items-center right-3 top-3 left-3">
                <div className="text-color-text flex flex-1 items-center">
                    <img alt="App Logo" src={logo} className="mr-2 w-11" />
                    <h1 className="m-0 text-xl font-medium mb-0!">
                        {import.meta.env.VITE_GLOB_APP_TITLE}
                    </h1>
                </div>
                <div className="flex items-center">
                    <ThemeButton />
                    <LanguageButton className="px-2" />
                </div>
            </header>
            <div className="flex items-center overflow-hidden h-full">
                <Row className={clsx('h-screen w-full', { 'flex-row-reverse': true })}>
                    <Col
                        xs={0}
                        sm={0}
                        lg={15}
                        style={{
                            backgroundImage: `radial-gradient(${token.colorBgContainer}, ${token.colorPrimaryBg})`,
                        }}
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-3">
                            <Banner className="h-64 motion-safe:animate-bounce-in-down-out-up" />
                            <div className="text-xl text-color-text-secondary mt-6 font-sans lg:text-2xl">
                                {t('authority.pageTitle')}
                            </div>
                            <div className="text-color-text-tertiary mt-2">
                                {t('authority.pageDescription')}
                            </div>
                        </div>
                    </Col>

                    <Col
                        xs={24}
                        sm={24}
                        lg={9}
                        className="relative flex flex-col justify-center px-6 py-10 xl:px-8"
                    >
                        <div className="w-full sm:mx-auto md:max-w-md mt-40">
                            <FormModeContext.Provider value={providedValue}>
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={formMode}
                                        initial={{ x: 30, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {FORM_COMPONENT_MAP[formMode]}
                                    </motion.div>
                                </AnimatePresence>
                            </FormModeContext.Provider>
                        </div>

                        <LayoutFooter className="w-full absolute bottom-3 left-1/2 -translate-x-1/2" />
                    </Col>
                </Row>
            </div>
        </div>
    );
}
