using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Common.Model
{
    public class ProductModel
    {
        /// <summary>
        /// getter setter for ProductID
        /// </summary>
        [Key]
        public int ProductID { get; set; }

        /// <summary>
        ///  getter setter for ProductName
        /// </summary>
        public string ProductName { get; set; }

        /// <summary>
        ///  getter setter for Description
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        ///  getter setter for Price
        /// </summary>
        public float Price { get; set; }

        /// <summary>
        ///  getter setter for Image
        /// </summary>
        public string Image { get; set; }

    }
}
