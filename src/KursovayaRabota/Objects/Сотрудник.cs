﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.KursovayaRabota
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудник.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудник CustomAttributes)

    // *** End programmer edit section *** (Сотрудник CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникE", new string[] {
            "КодСотрудника as \'ID сотрудника\'",
            "ФИО as \'ФИО\'",
            "Должности as \'Должность\'",
            "ДанныеПаспорта as \'Серия и номер паспорта\'",
            "Телефон as \'Телефон\'"})]
    [MasterViewDefineAttribute("СотрудникE", "Должности", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Должность")]
    [View("СотрудникL", new string[] {
            "КодСотрудника as \'ID сотрудника\'",
            "ФИО as \'ФИО\'",
            "Должности.Должность as \'Должность\'",
            "ДанныеПаспорта as \'Серия и номер паспорта\'",
            "Телефон as \'Телефон\'"})]
    public class Сотрудник : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодСотрудника;
        
        private string fФИО;
        
        private int fДанныеПаспорта;
        
        private int fТелефон;
        
        private IIS.KursovayaRabota.Должности fДолжности;
        
        // *** Start programmer edit section *** (Сотрудник CustomMembers)

        // *** End programmer edit section *** (Сотрудник CustomMembers)

        
        /// <summary>
        /// ДанныеПаспорта.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.ДанныеПаспорта CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.ДанныеПаспорта CustomAttributes)
        public virtual int ДанныеПаспорта
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.ДанныеПаспорта Get start)

                // *** End programmer edit section *** (Сотрудник.ДанныеПаспорта Get start)
                int result = this.fДанныеПаспорта;
                // *** Start programmer edit section *** (Сотрудник.ДанныеПаспорта Get end)

                // *** End programmer edit section *** (Сотрудник.ДанныеПаспорта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.ДанныеПаспорта Set start)

                // *** End programmer edit section *** (Сотрудник.ДанныеПаспорта Set start)
                this.fДанныеПаспорта = value;
                // *** Start programmer edit section *** (Сотрудник.ДанныеПаспорта Set end)

                // *** End programmer edit section *** (Сотрудник.ДанныеПаспорта Set end)
            }
        }
        
        /// <summary>
        /// КодСотрудника.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.КодСотрудника CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.КодСотрудника CustomAttributes)
        public virtual int КодСотрудника
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.КодСотрудника Get start)

                // *** End programmer edit section *** (Сотрудник.КодСотрудника Get start)
                int result = this.fКодСотрудника;
                // *** Start programmer edit section *** (Сотрудник.КодСотрудника Get end)

                // *** End programmer edit section *** (Сотрудник.КодСотрудника Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.КодСотрудника Set start)

                // *** End programmer edit section *** (Сотрудник.КодСотрудника Set start)
                this.fКодСотрудника = value;
                // *** Start programmer edit section *** (Сотрудник.КодСотрудника Set end)

                // *** End programmer edit section *** (Сотрудник.КодСотрудника Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Телефон CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Телефон CustomAttributes)
        public virtual int Телефон
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Телефон Get start)

                // *** End programmer edit section *** (Сотрудник.Телефон Get start)
                int result = this.fТелефон;
                // *** Start programmer edit section *** (Сотрудник.Телефон Get end)

                // *** End programmer edit section *** (Сотрудник.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Телефон Set start)

                // *** End programmer edit section *** (Сотрудник.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (Сотрудник.Телефон Set end)

                // *** End programmer edit section *** (Сотрудник.Телефон Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.ФИО CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.ФИО Get start)

                // *** End programmer edit section *** (Сотрудник.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Сотрудник.ФИО Get end)

                // *** End programmer edit section *** (Сотрудник.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.ФИО Set start)

                // *** End programmer edit section *** (Сотрудник.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Сотрудник.ФИО Set end)

                // *** End programmer edit section *** (Сотрудник.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Сотрудник.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Должности CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Должности CustomAttributes)
        [PropertyStorage(new string[] {
                "Должности"})]
        [NotNull()]
        public virtual IIS.KursovayaRabota.Должности Должности
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Должности Get start)

                // *** End programmer edit section *** (Сотрудник.Должности Get start)
                IIS.KursovayaRabota.Должности result = this.fДолжности;
                // *** Start programmer edit section *** (Сотрудник.Должности Get end)

                // *** End programmer edit section *** (Сотрудник.Должности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Должности Set start)

                // *** End programmer edit section *** (Сотрудник.Должности Set start)
                this.fДолжности = value;
                // *** Start programmer edit section *** (Сотрудник.Должности Set end)

                // *** End programmer edit section *** (Сотрудник.Должности Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникE", typeof(IIS.KursovayaRabota.Сотрудник));
                }
            }
            
            /// <summary>
            /// "СотрудникL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникL", typeof(IIS.KursovayaRabota.Сотрудник));
                }
            }
        }
    }
}
