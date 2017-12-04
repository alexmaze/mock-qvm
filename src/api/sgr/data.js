exports.detail = {
  security_group_id: "sg-m5ebnlswk1d43fw3qa2a",
  inner_access_policy: "Accept",
  security_group_name: "child1-group1",
  description: "System created security group.",
  region_id: "cn-qingdao",
  request_id: "3247FAD4-3FFB-4BE7-89AB-8488FBC1735A",
  permissions: {
    permission: [
      {
        source_cidr_ip: "0.0.0.0/0",
        dest_cidr_ip: "",
        description: "System created rule.",
        nic_type: "intranet",
        dest_group_name: "",
        port_range: "-1/-1",
        dest_group_id: "",
        direction: "ingress",
        priority: 110,
        ip_protocol: "ICMP",
        source_group_owner_account: "",
        policy: "Accept",
        create_time: "2017-11-28T08:19:06Z",
        source_group_id: "",
        dest_group_owner_account: "",
        source_group_name: ""
      },
      {
        source_cidr_ip: "0.0.0.0/0",
        dest_cidr_ip: "",
        description: "System created rule.",
        nic_type: "intranet",
        dest_group_name: "",
        port_range: "22/22",
        dest_group_id: "",
        direction: "ingress",
        priority: 110,
        ip_protocol: "TCP",
        source_group_owner_account: "",
        policy: "Accept",
        create_time: "2017-11-28T08:19:06Z",
        source_group_id: "",
        dest_group_owner_account: "",
        source_group_name: ""
      },
      {
        source_cidr_ip: "0.0.0.0/0",
        dest_cidr_ip: "",
        description: "System created rule.",
        nic_type: "intranet",
        dest_group_name: "",
        port_range: "3389/3389",
        dest_group_id: "",
        direction: "ingress",
        priority: 110,
        ip_protocol: "TCP",
        source_group_owner_account: "",
        policy: "Accept",
        create_time: "2017-11-28T08:19:06Z",
        source_group_id: "",
        dest_group_owner_account: "",
        source_group_name: ""
      },
      {
        source_cidr_ip: "",
        dest_cidr_ip: "0.0.0.0/0",
        description: "System created rule.",
        nic_type: "intranet",
        dest_group_name: "",
        port_range: "-1/-1",
        dest_group_id: "",
        direction: "egress",
        priority: 110,
        ip_protocol: "ALL",
        source_group_owner_account: "",
        policy: "Accept",
        create_time: "2017-11-28T08:19:07Z",
        source_group_id: "",
        dest_group_owner_account: "",
        source_group_name: ""
      }
    ]
  },
  vpc_id: "vpc-m5ecnznw3rrecb8rdw5fg"
}

exports.list = {
  page: 1,
  size: 10,
  data: [
    {
      creation_time: "2017-11-28T08:19:00Z",
      description: "System created security group.",
      security_group_id: "sg-m5ebnlswk1d43fw3qa2a",
      security_group_name: "child1-group1",
      tags: {
        tag: []
      },
      region_id: "cn-qingdao",
      vpc_id: "vpc-m5ecnznw3rrecb8rdw5fg",
      instance_count: 1
    },
    {
      region_id: "cn-qingdao",
      creation_time: "2017-09-30T03:38:20Z",
      description:
        "security group of ACS Cluster c354b63efa4ec475bace12b7df79f679c",
      security_group_id: "sg-m5e74et2e2gnidnqnspb",
      security_group_name:
        "alicloud-cs-auto-created-security-group-c354b63efa4ec475bace12b7df79f679c",
      tags: {
        tag: [
          {
            tag_key: "sss",
            tag_value: "test"
          }
        ]
      },
      vpc_id: "vpc-m5edezv0mqbduywskq5fw",
      instance_count: 0
    },
    {
      region_id: "cn-qingdao",
      creation_time: "2017-09-28T08:29:54Z",
      description:
        "security group of ACS Cluster c8c9397d0268649b89646611a47ffa3e3",
      security_group_id: "sg-m5e6g18mpr8usrsqyp9e",
      security_group_name:
        "alicloud-cs-auto-created-security-group-c8c9397d0268649b89646611a47ffa3e3",
      tags: {
        tag: []
      },
      vpc_id: "vpc-m5edezv0mqbduywskq5fw",
      instance_count: 0
    },
    {
      region_id: "cn-qingdao",
      creation_time: "2017-06-07T11:41:09Z",
      description:
        "security group of ACS Cluster c75fc3bc76d0f48cdaabc5a1b216984f8",
      security_group_id: "sg-m5ejayberwpx73z57e5y",
      security_group_name:
        "alicloud-cs-auto-created-security-group-c75fc3bc76d0f48cdaabc5a1b216984f8",
      tags: {
        tag: []
      },
      vpc_id: "vpc-m5edezv0mqbduywskq5fw",
      instance_count: 0
    }
  ],
  total: 4
}
