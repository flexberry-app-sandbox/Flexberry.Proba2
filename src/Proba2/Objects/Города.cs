﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proba2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Города.
    /// </summary>
    // *** Start programmer edit section *** (Города CustomAttributes)

    // *** End programmer edit section *** (Города CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ГородаE", new string[] {
            "Наименование as \'Наименование\'",
            "Здания as \'Здания\'",
            "Здания.Номер as \'Номер\'"}, Hidden=new string[] {
            "Здания.Номер"})]
    [MasterViewDefineAttribute("ГородаE", "Здания", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Номер")]
    [View("ГородаL", new string[] {
            "Наименование as \'Наименование\'",
            "Здания.Номер as \'Номер\'"})]
    public class Города : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private int fПодъезд;
        
        private IIS.Proba2.Здания fЗдания;
        
        // *** Start programmer edit section *** (Города CustomMembers)

        // *** End programmer edit section *** (Города CustomMembers)

        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Города.Наименование CustomAttributes)

        // *** End programmer edit section *** (Города.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Города.Наименование Get start)

                // *** End programmer edit section *** (Города.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Города.Наименование Get end)

                // *** End programmer edit section *** (Города.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Города.Наименование Set start)

                // *** End programmer edit section *** (Города.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Города.Наименование Set end)

                // *** End programmer edit section *** (Города.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Подъезд.
        /// </summary>
        // *** Start programmer edit section *** (Города.Подъезд CustomAttributes)

        // *** End programmer edit section *** (Города.Подъезд CustomAttributes)
        public virtual int Подъезд
        {
            get
            {
                // *** Start programmer edit section *** (Города.Подъезд Get start)

                // *** End programmer edit section *** (Города.Подъезд Get start)
                int result = this.fПодъезд;
                // *** Start programmer edit section *** (Города.Подъезд Get end)

                // *** End programmer edit section *** (Города.Подъезд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Города.Подъезд Set start)

                // *** End programmer edit section *** (Города.Подъезд Set start)
                this.fПодъезд = value;
                // *** Start programmer edit section *** (Города.Подъезд Set end)

                // *** End programmer edit section *** (Города.Подъезд Set end)
            }
        }
        
        /// <summary>
        /// Города.
        /// </summary>
        // *** Start programmer edit section *** (Города.Здания CustomAttributes)

        // *** End programmer edit section *** (Города.Здания CustomAttributes)
        [PropertyStorage(new string[] {
                "Здания"})]
        [NotNull()]
        public virtual IIS.Proba2.Здания Здания
        {
            get
            {
                // *** Start programmer edit section *** (Города.Здания Get start)

                // *** End programmer edit section *** (Города.Здания Get start)
                IIS.Proba2.Здания result = this.fЗдания;
                // *** Start programmer edit section *** (Города.Здания Get end)

                // *** End programmer edit section *** (Города.Здания Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Города.Здания Set start)

                // *** End programmer edit section *** (Города.Здания Set start)
                this.fЗдания = value;
                // *** Start programmer edit section *** (Города.Здания Set end)

                // *** End programmer edit section *** (Города.Здания Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ГородаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГородаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГородаE", typeof(IIS.Proba2.Города));
                }
            }
            
            /// <summary>
            /// "ГородаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГородаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГородаL", typeof(IIS.Proba2.Города));
                }
            }
        }
    }
}
