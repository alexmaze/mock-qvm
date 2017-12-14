exports.list = {
  data: [
    { region_id: "cn-qingdao", local_name: "华北 1" },
    { region_id: "cn-beijing", local_name: "华北 2" },
    { region_id: "cn-zhangjiakou", local_name: "华北 3" },
    { region_id: "cn-huhehaote", local_name: "华北 5" },
    { region_id: "cn-hangzhou", local_name: "华东 1" },
    { region_id: "cn-shanghai", local_name: "华东 2" },
    { region_id: "cn-shenzhen", local_name: "华南 1" },
    { region_id: "cn-hongkong", local_name: "香港" },
    { region_id: "ap-northeast-1", local_name: "亚太东北 1 (东京)" },
    { region_id: "ap-southeast-1", local_name: "亚太东南 1 (新加坡)" },
    { region_id: "ap-southeast-2", local_name: "亚太东南 2 (悉尼)" },
    { region_id: "ap-southeast-3", local_name: "亚太东南 3 (吉隆坡)" },
    { region_id: "us-east-1", local_name: "美国东部 1 (弗吉尼亚)" },
    { region_id: "us-west-1", local_name: "美国西部 1 (硅谷)" },
    { region_id: "me-east-1", local_name: "中东东部 1 (迪拜)" },
    { region_id: "eu-central-1", local_name: "欧洲中部 1 (法兰克福)" }
  ]
}
exports.zoneList = {
  data: [
    {
      available_resource_creation: {
        resource_types: ["VSwitch", "IoOptimized", "Instance", "Disk"]
      },
      available_resources: {
        resources_info: [
          {
            io_optimized: true,
            system_disk_categories: {
              supported_system_disk_category: ["cloud_ssd", "cloud_efficiency"]
            },
            instance_types: {
              supported_instance_type: [
                "ecs.c5.large",
                "ecs.hfc5.xlarge",
                "ecs.hfg5.8xlarge",
                "ecs.r5.large",
                "ecs.sn2.7xlarge",
                "ecs.sn2ne.14xlarge",
                "ecs.sn2.medium",
                "ecs.d1ne.4xlarge",
                "ecs.n4.xlarge",
                "ecs.se1.large",
                "ecs.t5-c1m2.2xlarge",
                "ecs.gn5-c8g1.8xlarge",
                "ecs.xn4.small",
                "ecs.sn2ne.8xlarge",
                "ecs.mn4.large",
                "ecs.sn1.7xlarge",
                "ecs.mn4.8xlarge",
                "ecs.r5.22xlarge",
                "ecs.n4.2xlarge",
                "ecs.hfg5.4xlarge",
                "ecs.hfc5.2xlarge",
                "ecs.g5.large",
                "ecs.i2.16xlarge",
                "ecs.se1.8xlarge",
                "ecs.t5-lc1m2.small",
                "ecs.sn2.3xlarge",
                "ecs.t5-lc1m1.small",
                "ecs.i2.xlarge",
                "ecs.se1ne.large",
                "ecs.t5-c1m4.2xlarge",
                "ecs.i2.2xlarge",
                "ecs.sn1.large",
                "ecs.mn4.xlarge",
                "ecs.g5.4xlarge",
                "ecs.hfg5.large",
                "ecs.g5.xlarge",
                "ecs.hfc5.4xlarge",
                "ecs.r5.8xlarge",
                "ecs.se1ne.xlarge",
                "ecs.se1ne.4xlarge",
                "ecs.sn1.medium",
                "ecs.n4.8xlarge",
                "ecs.e4.xlarge",
                "ecs.d1ne.6xlarge",
                "ecs.n4.large",
                "ecs.t5-lc1m4.large",
                "ecs.g5.16xlarge",
                "ecs.se1.4xlarge",
                "ecs.t5-c1m2.xlarge",
                "ecs.t5-c1m1.large",
                "ecs.i2.8xlarge",
                "ecs.hfc5.6xlarge",
                "ecs.i2.4xlarge",
                "ecs.t5-c1m1.2xlarge",
                "ecs.t5-lc2m1.nano",
                "ecs.sn1.xlarge",
                "ecs.d1ne.2xlarge",
                "ecs.gn5-c8g1.14xlarge",
                "ecs.hfc5.8xlarge",
                "ecs.n4.4xlarge",
                "ecs.r5.xlarge",
                "ecs.r5.16xlarge",
                "ecs.hfg5.6xlarge",
                "ecs.se1ne.2xlarge",
                "ecs.hfg5.xlarge",
                "ecs.c5.16xlarge",
                "ecs.se1.14xlarge",
                "ecs.d1ne.8xlarge",
                "ecs.sn2ne.4xlarge",
                "ecs.sn1ne.8xlarge",
                "ecs.mn4.2xlarge",
                "ecs.sn2ne.large",
                "ecs.sn2ne.xlarge",
                "ecs.e4.4xlarge",
                "ecs.sn1ne.2xlarge",
                "ecs.e4.small",
                "ecs.c5.8xlarge",
                "ecs.sn2ne.2xlarge",
                "ecs.t5-c1m4.large",
                "ecs.n4.small",
                "ecs.gn5t.7xlarge",
                "ecs.sn1ne.xlarge",
                "ecs.t5-lc1m2.large",
                "ecs.sn2.large",
                "ecs.g5.6xlarge",
                "ecs.t5-c1m2.large",
                "ecs.se1.xlarge",
                "ecs.r5.4xlarge",
                "ecs.r5.2xlarge",
                "ecs.d1ne.14xlarge",
                "ecs.e4.large",
                "ecs.se1.2xlarge",
                "ecs.se1ne.14xlarge",
                "ecs.gn5t.14xlarge",
                "ecs.sn2.xlarge",
                "ecs.e4.2xlarge",
                "ecs.t5-c1m1.xlarge",
                "ecs.sn1ne.large",
                "ecs.t5-c1m4.xlarge",
                "ecs.sn1.3xlarge",
                "ecs.c5.2xlarge",
                "ecs.g5.2xlarge",
                "ecs.c5.6xlarge",
                "ecs.hfg5.2xlarge",
                "ecs.c5.4xlarge",
                "ecs.sn2.13xlarge",
                "ecs.hfg5.14xlarge",
                "ecs.sn1ne.4xlarge",
                "ecs.r5.6xlarge",
                "ecs.mn4.4xlarge",
                "ecs.c5.xlarge",
                "ecs.hfc5.large",
                "ecs.se1ne.8xlarge",
                "ecs.mn4.small",
                "ecs.g5.8xlarge"
              ]
            },
            instance_type_families: {
              supported_instance_type_family: [
                "ecs.hfc5",
                "ecs.gn5",
                "ecs.sn1ne",
                "ecs.hfg5",
                "ecs.t5",
                "ecs.mn4",
                "ecs.sn1",
                "ecs.sn2",
                "ecs.r5",
                "ecs.gn5t",
                "ecs.xn4",
                "ecs.e4",
                "ecs.se1",
                "ecs.n4",
                "ecs.se1ne",
                "ecs.i2",
                "ecs.sn2ne",
                "ecs.d1ne",
                "ecs.g5",
                "ecs.c5"
              ]
            },
            data_disk_categories: {
              supported_data_disk_category: ["cloud_ssd", "cloud_efficiency"]
            },
            instance_generations: {
              supported_instance_generation: ["ecs-3", "ecs-2", "ecs-4"]
            },
            network_types: {
              supported_network_category: ["vpc"]
            }
          }
        ]
      },
      available_instance_types: {
        instance_types: [
          "ecs.c5.large",
          "ecs.hfc5.xlarge",
          "ecs.hfg5.8xlarge",
          "ecs.r5.large",
          "ecs.sn2.7xlarge",
          "ecs.sn2ne.14xlarge",
          "ecs.sn2.medium",
          "ecs.d1ne.4xlarge",
          "ecs.n4.xlarge",
          "ecs.se1.large",
          "ecs.t5-c1m2.2xlarge",
          "ecs.gn5-c8g1.8xlarge",
          "ecs.xn4.small",
          "ecs.sn2ne.8xlarge",
          "ecs.mn4.large",
          "ecs.sn1.7xlarge",
          "ecs.mn4.8xlarge",
          "ecs.r5.22xlarge",
          "ecs.n4.2xlarge",
          "ecs.hfg5.4xlarge",
          "ecs.hfc5.2xlarge",
          "ecs.g5.large",
          "ecs.i2.16xlarge",
          "ecs.se1.8xlarge",
          "ecs.t5-lc1m2.small",
          "ecs.sn2.3xlarge",
          "ecs.t5-lc1m1.small",
          "ecs.i2.xlarge",
          "ecs.se1ne.large",
          "ecs.t5-c1m4.2xlarge",
          "ecs.i2.2xlarge",
          "ecs.sn1.large",
          "ecs.mn4.xlarge",
          "ecs.g5.4xlarge",
          "ecs.hfg5.large",
          "ecs.g5.xlarge",
          "ecs.hfc5.4xlarge",
          "ecs.r5.8xlarge",
          "ecs.se1ne.xlarge",
          "ecs.se1ne.4xlarge",
          "ecs.sn1.medium",
          "ecs.n4.8xlarge",
          "ecs.e4.xlarge",
          "ecs.d1ne.6xlarge",
          "ecs.n4.large",
          "ecs.t5-lc1m4.large",
          "ecs.g5.16xlarge",
          "ecs.se1.4xlarge",
          "ecs.t5-c1m2.xlarge",
          "ecs.t5-c1m1.large",
          "ecs.i2.8xlarge",
          "ecs.hfc5.6xlarge",
          "ecs.i2.4xlarge",
          "ecs.t5-c1m1.2xlarge",
          "ecs.t5-lc2m1.nano",
          "ecs.sn1.xlarge",
          "ecs.d1ne.2xlarge",
          "ecs.gn5-c8g1.14xlarge",
          "ecs.hfc5.8xlarge",
          "ecs.n4.4xlarge",
          "ecs.r5.xlarge",
          "ecs.r5.16xlarge",
          "ecs.hfg5.6xlarge",
          "ecs.se1ne.2xlarge",
          "ecs.hfg5.xlarge",
          "ecs.c5.16xlarge",
          "ecs.se1.14xlarge",
          "ecs.d1ne.8xlarge",
          "ecs.sn2ne.4xlarge",
          "ecs.sn1ne.8xlarge",
          "ecs.mn4.2xlarge",
          "ecs.sn2ne.large",
          "ecs.sn2ne.xlarge",
          "ecs.e4.4xlarge",
          "ecs.sn1ne.2xlarge",
          "ecs.e4.small",
          "ecs.c5.8xlarge",
          "ecs.sn2ne.2xlarge",
          "ecs.t5-c1m4.large",
          "ecs.n4.small",
          "ecs.gn5t.7xlarge",
          "ecs.sn1ne.xlarge",
          "ecs.t5-lc1m2.large",
          "ecs.sn2.large",
          "ecs.g5.6xlarge",
          "ecs.t5-c1m2.large",
          "ecs.se1.xlarge",
          "ecs.r5.4xlarge",
          "ecs.r5.2xlarge",
          "ecs.d1ne.14xlarge",
          "ecs.e4.large",
          "ecs.se1.2xlarge",
          "ecs.se1ne.14xlarge",
          "ecs.gn5t.14xlarge",
          "ecs.sn2.xlarge",
          "ecs.e4.2xlarge",
          "ecs.t5-c1m1.xlarge",
          "ecs.sn1ne.large",
          "ecs.t5-c1m4.xlarge",
          "ecs.sn1.3xlarge",
          "ecs.c5.2xlarge",
          "ecs.g5.2xlarge",
          "ecs.c5.6xlarge",
          "ecs.hfg5.2xlarge",
          "ecs.c5.4xlarge",
          "ecs.sn2.13xlarge",
          "ecs.hfg5.14xlarge",
          "ecs.sn1ne.4xlarge",
          "ecs.r5.6xlarge",
          "ecs.mn4.4xlarge",
          "ecs.c5.xlarge",
          "ecs.hfc5.large",
          "ecs.se1ne.8xlarge",
          "ecs.mn4.small",
          "ecs.g5.8xlarge"
        ]
      },
      zone_id: "cn-qingdao-c",
      available_volume_categories: {
        volume_categories: ["san_ssd", "san_efficiency"]
      },
      local_name: "华北 1 可用区 C",
      available_disk_categories: {
        disk_categories: ["cloud_ssd", "cloud_efficiency"]
      }
    },
    {
      available_resource_creation: {
        resource_types: ["VSwitch", "IoOptimized", "Instance", "Disk"]
      },
      available_resources: {
        resources_info: [
          {
            io_optimized: true,
            system_disk_categories: {
              supported_system_disk_category: ["cloud_ssd", "cloud_efficiency"]
            },
            instance_types: {
              supported_instance_type: [
                "ecs.n1.xlarge",
                "ecs.s2.xlarge",
                "ecs.n2.3xlarge",
                "ecs.n2.medium",
                "ecs.s2.2xlarge",
                "ecs.n1.small",
                "ecs.n2.xlarge",
                "ecs.e3.large",
                "ecs.e3.xlarge",
                "ecs.n1.tiny",
                "ecs.c2.xlarge",
                "ecs.n2.small",
                "ecs.s3.large",
                "ecs.n2.7xlarge",
                "ecs.n1.large",
                "ecs.e3.7xlarge",
                "ecs.c1.small",
                "ecs.m2.xlarge",
                "ecs.n1.3xlarge",
                "ecs.n1.medium",
                "ecs.e3.medium",
                "ecs.m1.medium",
                "ecs.m2.medium",
                "ecs.n1.7xlarge",
                "ecs.s2.large",
                "ecs.s3.medium",
                "ecs.m1.xlarge",
                "ecs.c2.large",
                "ecs.e3.small",
                "ecs.e3.3xlarge",
                "ecs.c2.medium",
                "ecs.n2.large",
                "ecs.c1.large"
              ]
            },
            instance_type_families: {
              supported_instance_type_family: [
                "ecs.c1",
                "ecs.s1",
                "ecs.e3",
                "ecs.t1",
                "ecs.m1",
                "ecs.s2",
                "ecs.n1",
                "ecs.m2",
                "ecs.s3",
                "ecs.n2",
                "ecs.c2"
              ]
            },
            data_disk_categories: {
              supported_data_disk_category: [
                "cloud_ssd",
                "cloud_efficiency",
                "cloud"
              ]
            },
            instance_generations: {
              supported_instance_generation: ["ecs-2", "ecs-1"]
            },
            network_types: {
              supported_network_category: ["vpc"]
            }
          }
        ]
      },
      available_instance_types: {
        instance_types: [
          "ecs.n1.xlarge",
          "ecs.s2.xlarge",
          "ecs.t1.xsmall",
          "ecs.n2.3xlarge",
          "ecs.n2.medium",
          "ecs.s2.2xlarge",
          "ecs.n1.small",
          "ecs.n2.xlarge",
          "ecs.e3.large",
          "ecs.e3.xlarge",
          "ecs.n1.tiny",
          "ecs.c2.xlarge",
          "ecs.n2.small",
          "ecs.s3.large",
          "ecs.n2.7xlarge",
          "ecs.n1.large",
          "ecs.e3.7xlarge",
          "ecs.c1.small",
          "ecs.m2.xlarge",
          "ecs.n1.3xlarge",
          "ecs.n1.medium",
          "ecs.s2.small",
          "ecs.e3.medium",
          "ecs.s1.medium",
          "ecs.m2.medium",
          "ecs.m1.medium",
          "ecs.n1.7xlarge",
          "ecs.s2.large",
          "ecs.s3.medium",
          "ecs.m1.xlarge",
          "ecs.s1.small",
          "ecs.s1.large",
          "ecs.c2.large",
          "ecs.e3.small",
          "ecs.e3.3xlarge",
          "ecs.c2.medium",
          "ecs.t1.small",
          "ecs.n2.large",
          "ecs.c1.large"
        ]
      },
      zone_id: "cn-qingdao-b",
      available_volume_categories: {
        volume_categories: ["san_ssd", "san_efficiency"]
      },
      local_name: "华北 1 可用区 B",
      available_disk_categories: {
        disk_categories: ["cloud_ssd", "cloud_efficiency", "cloud"]
      }
    }
  ]
}
exports.newRegions = {
  data: [
    {
      region_id: "cn-qingdao",
      local_name: "华北 1 (青岛)",
      zones: [
        {
          zone_id: "cn-qingdao-b",
          local_name: "华北 1 可用区 B"
        },
        {
          zone_id: "cn-qingdao-c",
          local_name: "华北 1 可用区 C"
        }
      ],
      resource: {
        instance_families: [
          {
            instance_type_family_id: "ecs.t5",
            generation: "ecs-4"
          },
          {
            instance_type_family_id: "ecs.g5",
            generation: "ecs-4"
          }
        ]
      }
    },
    {
      region_id: "cn-beijing",
      local_name: "华北 2 (北京)",
      zones: [
        {
          zone_id: "cn-beijing-a",
          local_name: "华北 2 可用区 A"
        },
        {
          zone_id: "cn-beijing-b",
          local_name: "华北 2 可用区 B"
        },
        {
          zone_id: "cn-beijing-c",
          local_name: "华北 2 可用区 C"
        },
        {
          zone_id: "cn-beijing-d",
          local_name: "华北 2 可用区 D"
        },
        {
          zone_id: "cn-beijing-e",
          local_name: "华北 2 可用区 E"
        }
      ],
      resource: {
        instance_families: [
          {
            instance_type_family_id: "ecs.t5",
            generation: "ecs-4"
          },
          {
            instance_type_family_id: "ecs.g5",
            generation: "ecs-4"
          }
        ]
      }
    },
    {
      region_id: "cn-hangzhou",
      local_name: "华东 1 (杭州)",
      zones: [
        {
          zone_id: "cn-hangzhou-b",
          local_name: "华东 1 可用区 B"
        },
        {
          zone_id: "cn-hangzhou-e",
          local_name: "华东 1 可用区 E"
        },
        {
          zone_id: "cn-hangzhou-f",
          local_name: "华东 1 可用区 F"
        }
      ],
      resource: {
        instance_families: [
          {
            instance_type_family_id: "ecs.t5",
            generation: "ecs-4"
          },
          {
            instance_type_family_id: "ecs.sn2",
            generation: "ecs-2"
          },
          {
            instance_type_family_id: "ecs.sn2ne",
            generation: "ecs-3"
          }
        ]
      }
    },
    {
      region_id: "cn-shanghai",
      local_name: "华东 2 (上海)",
      zones: [
        {
          zone_id: "cn-shanghai-a",
          local_name: "华东 2 可用区 A"
        },
        {
          zone_id: "cn-shanghai-b",
          local_name: "华东 2 可用区 B"
        },
        {
          zone_id: "cn-shanghai-c",
          local_name: "华东 2 可用区 C"
        },
        {
          zone_id: "cn-shanghai-d",
          local_name: "华东 2 可用区 D"
        }
      ],
      resource: {
        instance_families: [
          {
            instance_type_family_id: "ecs.t5",
            generation: "ecs-4"
          },
          {
            instance_type_family_id: "ecs.sn2",
            generation: "ecs-2"
          },
          {
            instance_type_family_id: "ecs.sn2ne",
            generation: "ecs-3"
          }
        ]
      }
    },
    {
      region_id: "cn-shenzhen",
      local_name: "华南 1 (深圳)",
      zones: [
        {
          zone_id: "cn-shenzhen-a",
          local_name: "华南 1 可用区 A"
        },
        {
          zone_id: "cn-shenzhen-b",
          local_name: "华南 1 可用区 B"
        },
        {
          zone_id: "cn-shenzhen-c",
          local_name: "华南 1 可用区 C"
        }
      ],
      resource: {
        instance_families: [
          {
            instance_type_family_id: "ecs.t5",
            generation: "ecs-4"
          },
          {
            instance_type_family_id: "ecs.sn2",
            generation: "ecs-2"
          },
          {
            instance_type_family_id: "ecs.sn2ne",
            generation: "ecs-3"
          }
        ]
      }
    }
  ]
}
